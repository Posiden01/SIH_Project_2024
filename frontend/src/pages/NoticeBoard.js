import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

const notices = [
  {
    id: 1,
    title: "Maintenance Scheduled",
    date: "November 20, 2024",
    content: "The website will be down for scheduled maintenance from 10:00 PM to 2:00 AM.",
  },
  {
    id: 2,
    title: "Community Meeting",
    date: "November 25, 2024",
    content: "A meeting will be held to discuss recent unauthorized construction activities.",
  },
  {
    id: 3,
    title: "New Features Update",
    date: "December 1, 2024",
    content: "We are introducing new features to report incidents with more accuracy.",
  },
];

function NoticeBoard() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Notice Board</h1>

      {notices.map((notice) => (
        <Card className="mb-4" key={notice.id}>
          <Card.Header>
            <h4>{notice.title}</h4>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Date:</strong> {notice.date}
            </Card.Text>
            <Card.Text>{notice.content}</Card.Text>
            <Button variant="primary" onClick={() => alert(`Notice ID: ${notice.id}`)}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}

      <h5 className="text-center mt-5">Stay tuned for more updates!</h5>
    </Container>
  );
}

export default NoticeBoard;
