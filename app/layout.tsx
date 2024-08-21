import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Photoshop",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <head>
          {/* <script
            defer
            src="https://widget-js.cometchat.io/v3/cometchatwidget.js"
          ></script> */}
        </head>
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                  document.addEventListener("DOMContentLoaded", function() {
                    CometChatWidget.init({
                      appID: "26174968c0c4031f",
                      appRegion: "in",
                      authKey: "99dbfdd5c447184a1919258f29b77df153dcbeee",
                    }).then(
                      function(response) {
                        console.log("Initialization completed successfully");
                        CometChatWidget.CometChat.getLoggedinUser().then(
                          (user) => {
                          console.log("initialized getLoggedinUser function")
                            if (!user) {
                              console.log("not logged in")
                              var array = new Uint32Array(1);
                              crypto.getRandomValues(array);
                              var UID = String((array[0] % 900000) + 100000).padStart(6, "0")
                              var name = "User_" + UID;
                              const user = new CometChatWidget.CometChat.User(UID);
                              user.setName(name);
                              CometChatWidget.CometChat.createUser(user, "99dbfdd5c447184a1919258f29b77df153dcbeee").then((user) => {
                                CometChatWidget.login({
                                  uid: UID,
                                  }).then(
                                    function(response) {
                                      CometChatWidget.launch({
                                        widgetID: "5abf11e6-7fe2-4678-9b45-b12ddb374dfb",
                                        docked: "true",
                                        alignment: "left", // left or right
                                        roundedCorners: "true",
                                        height: "450px",
                                        width: "400px",
                                        defaultID: "aisha_0", // default UID (user) or GUID (group) to show,
                                        defaultType: "user", // user or group
                                      });
                                    },
                                    function(error) {
                                      console.log("User login failed with error:", error);
                                      // Check the reason for error and take appropriate action.
                                    }
                                  );
                              });
                            } else { 
                              console.log("already logged in")
                              CometChatWidget.launch({
                                widgetID: "5abf11e6-7fe2-4678-9b45-b12ddb374dfb",
                                docked: "true",
                                alignment: "left", //left or right
                                roundedCorners: "true",
                                height: "450px",
                                width: "400px",
                                defaultID: "aisha_0", //default UID (user) or GUID (group) to show,
                                defaultType: "user", //user or group
                              });
                            }
                          },
                          (error) => {
                            console.log("Something went wrong", error);
                          }
                        );        
                      },
                      function(error) {
                        console.log("Initialization failed with error:", error);
                        // Check the reason for error and take appropriate action.
                      }
                    );
                  });
              `,
            }}
          ></script> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
