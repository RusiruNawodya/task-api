# task-api

# Task API

Simple REST API for managing tasks (Node.js + Express + MongoDB).

## Features
- Create task (title required) with validation
- List tasks
- Get task by id
- Delete task by id
- consistent error responses
- Uses MongoDB + Mongoose

## Requirements
- Node 18+ recommended
- MongoDB (local or Atlas)
- npm

## Setup

1. Clone:
   ```bash
   git clone <repo-url>
   cd task-api

## sample request

{
  "title": "Workout session",
  "description": "Attend evening gym session at 6 PM",
  "status": "completed"
}

{
        "title": "Complete project report",
        "description": "Finalize and submit the project report by Friday",
        "status": "in-progress"
    }

## sample response

{
        "_id": "690b22c25e9f30da6c40aa4a",
        "title": "Workout session",
        "description": "Attend evening gym session at 6 PM",
        "status": "completed",
        "createdAt": "2025-11-05T10:11:14.035Z",
        "__v": 0
    },

{
        "_id": "690b22b55e9f30da6c40aa48",
        "title": "Complete project report",
        "description": "Finalize and submit the project report by Friday",
        "status": "in-progress",
        "createdAt": "2025-11-05T10:11:01.633Z",
        "__v": 0
    },