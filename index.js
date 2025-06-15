import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to the users and posts API");
});


app.get("/users", async (_req, res) => {
  try {
    const allusers = await client.users.findMany();
    res.status(201).json(allusers);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong"});
  }
});


//Creating a user
app.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, emailAddress, userName } = req.body;
    const newUser = await client.users.create({
      data: {
        firstName,
        lastName,
        emailAddress,
        userName
      },
    });
    res.status(201).json(newUser);
  } catch (e) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});

//Get a user based on id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const specificUser = await client.users.findUnique({
      where: {
        id,
      },
    });

    res.status(200).json(specificUser);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});


//Get posts
app.get("/posts", async (_req, res) => {
  try {
    const allposts = await client.posts.findMany(
     {
      where:{ isDeleted : false }
     }
    );
    res.status(201).json(allposts);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong"});
  }
});

//Get post based on id
app.get("/posts/:postId", async (req, res) => {
  try {
    const { postId, title, content, userid } = req.params;

    const specificPost = await client.posts.findUnique({
      where: {
        postId,
        title,
        content,
        userid
      },
    });

    res.status(200).json(specificPost);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});

//Create a new POST
app.post("/posts", async (req, res) => {
  try {
    const { title, content, userid} = req.body;
    const newPost = await client.posts.create({
      data: {
        title,
        content,
        userid
    
      },
    });
    res.status(201).json(newPost);
  } catch (e) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});

//Update a post

app.put("/posts/:postId", async (req, res) => {
  try {
    const { title, content } = req.body;
    const { postId } = req.params;

  if (!title || !content) {
   res.status(500).json({ message: "Both title and content are required."});
}


    const updatePost = await client.posts.update({
      where: {
        postId,
      },
      data: {
        title,
        content
      },
    });

    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});

//update isDeleted to true indicating deletion
app.patch("/posts/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const deletePost = await client.posts.update({
      where: {
        postId,
      },
      data:{
          isDeleted : true
      }
    });

    res.status(200).json(deletePost);
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});