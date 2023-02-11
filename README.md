# Music-Streaming-System
 Fully functional, but feature-limited, version of an online music player.This is a clone web application using the create-react-app. The app consumes data from the Spotify API and tries to mimic the UI and front-end behaviors of the official Spotify web player as much as possible.
If a user login to a premium account (due to the limitation of the available API, free accounts cannot do much), user can access certain routes to their own playlists, saved items, etc. and use the app as a remote control play. The system provides personalized use of Spotify web player, so as to provide smooth playing of music with a vast variety of albums and songs present on spotify’s server.

# Features
* Get full view and scroll of your Playlists, Tracks, Albums.
* Has play and Pause buttons
* Sign In/Sign Out (OAUTH 2.0)
* View Your Profile
* Support Dark Mode
* Cross Platform functionality
* Smooth transition between songs
* Remotely control this app from anywhere (mobile, tablet , desktop)
* Has an secure authentication method to get token
* Has a similar interface to Spotify Web.
* Official Spotify API is used

# Snapshots

**Login Page**
![Screenshot (56)](https://user-images.githubusercontent.com/62384655/206257294-ac5000f6-20d1-4fa7-a3d8-0bca4ce206ce.png) 

**Music Player**
![Screenshot (67)](https://user-images.githubusercontent.com/62384655/206258835-4577664c-29e9-4599-979f-8122e648eee5.png)

**API calls**
![Screenshot (58)](https://user-images.githubusercontent.com/62384655/206258901-c71de2a5-f174-4c1f-97f3-d93b0acae98c.png)

# Installation 

This project requires node and npm installed globally.
Navigate into spotify-clone-client and install the necessary packages

 ```
 $ npm install
 ``` 
 
For the project to work properly a .env.local file similar to .env.example is required.
go to Spotify Developers API and create your token. Remember that the token will expire in 60 min.
To get the client ID and client secret, go to Spotify Developer Dashboard.
Create a new app and copy the client ID and client secret in .env.local file.
Create a .env.local file and paste the client ID and client secret as the example .env.example.
```
NEXTAUTH_URL=http://localhost:3000/
NEXT_PUBLIC_CLIENT_SECRET=*******
NEXT_PUBLIC_CLIENT_ID=077ccc46f9d34fc3ac2853da07ff1095
JWT_SECRET=some_secret_code
``` 
 
In the Spotify Developer Dashboard for your app, go to "edit settings" and click "Add redirect URI" and paste the following URL: http://localhost:3000/api/auth/callback/spotify

![Screenshot (55)](https://user-images.githubusercontent.com/62384655/206258983-abea752f-dc22-43bc-b06c-66714978cf59.png)

Now you can run the project locally.
 ```
 $ npm run dev
 ``` 




