import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "./css/customThemes.css";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { baseURL } from "../config/config";
import { AuthContext } from "../context/AuthContext";

export default function Account() {
  const { user, logout } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setStatus("Passwords do not match");
      return;
    }
    try {
      const res = await fetch(`${baseURL}/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      if (!res.ok) {
        const errData = await res.json();
        setStatus(errData.message || "Failed to change password");
        return;
      }

      setStatus("Password changed successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setStatus("Error changing password");
    }
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    setStatus("");
    try {
      const res = await fetch(`${baseURL}/auth/delete-account`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        setStatus(errData.message || "Failed to delete account");
        setDeleting(false);
        setShowDeleteModal(false);
        return;
      }

      // Logout user and redirect to homepage or login
      logout();
      setShowDeleteModal(false);
      // Redirect, for example:
      window.location.href = "/";
    } catch (error) {
      setStatus("Error deleting account");
      setDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <div>
      <br />
      <br />
      <Container style={{ width: "85%" }} fluid>
        <Header />
        <br />
        <Row>
          <Navbar />
        </Row>
        <br />
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="mb-4 text-center">Account Details</h2>
            <p>
              <strong>Name:</strong> {user?.name || "-"}
            </p>
            <p>
              <strong>Email:</strong> {user?.email || "-"}
            </p>

            <p>
              <strong>Registered on:</strong>{" "}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "-"}
            </p>

            <Form onSubmit={handleChangePassword}>
              {/* Cambio de contraseña */}
              <Form.Group className="mb-3" controlId="currentPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Change Password
              </Button>
            </Form>

            {status && (
              <p className="mt-3 text-center" style={{ color: "red" }}>
                {status}
              </p>
            )}

            {/* Botón para eliminar cuenta */}
            <div className="d-grid mt-5">
              <Button
                variant="danger"
                onClick={() => setShowDeleteModal(true)}
                disabled={deleting}
              >
                Delete Account
              </Button>
            </div>

            {/* Modal de confirmación */}
            <Modal
              show={showDeleteModal}
              onHide={() => setShowDeleteModal(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirm Account Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to delete your account? This action
                  cannot be undone.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="danger"
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Yes, Delete"}
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
