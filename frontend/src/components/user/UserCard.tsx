// src/components/UserCard.tsx

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { User } from '../../types.ts'; // Załóżmy, że mamy ten typ zdefiniowany w pliku types.ts

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.avatarUrl} /> {/* Zastąp 'avatarUrl' rzeczywistym kluczem obiektu użytkownika */}
            <Card.Body>
                <Card.Title>{user.name}</Card.Title> {/* Zastąp 'name' rzeczywistym kluczem obiektu użytkownika */}
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default UserCard;

