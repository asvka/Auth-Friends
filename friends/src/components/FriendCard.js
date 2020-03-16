import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

export default function FriendCard ({ name, age, email }) {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText>{name}</CardText>
                    <CardText>{age}</CardText>
                    <CardText>{email}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}