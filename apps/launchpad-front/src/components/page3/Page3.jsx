// import React, { useState, useEffect } from "react";
import { FormControl } from "@mui/material";
// import { useDropzone } from "react-dropzone";
// import paperUpload from "../../assets/Iconspaperupload.svg";
import globe from "../../assets/globeLogo.svg";
import whitepaper from "../../assets/whitepaperLogo.svg";
import fb from "../../assets/Iconsfb.svg";
import twitter from "../../assets/Iconstwitter.svg";
import telegram from "../../assets/Iconstelegram.svg";
import discord from "../../assets/Iconsdiscord.svg";
import "./page3.css";

function Page3(props) {
  const { updateInput, data } = props;

  const updateInputField = (e) => {
    e.preventDefault();
    updateInput(e.target.name, e.target.value);
  };
  return (
    <FormControl className="w-100 text-white pt-4">
      <p>Website *</p>
      <div style={{ position: "relative" }}>
        <img
          src={globe}
          alt="globe logo"
          className="h-100 d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            width: "3em",
            padding: ".7em",
            borderRight: "1px solid rgba(255,255,255,0.1)",
          }}
        />
        <input
          type={"text"}
          className="h3em py-2 border-none rounded text-white w-100"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "0 1em 0 3.5em",
            border: "none",
            name: "website",
          }}
          name="tokenWebsite"
          onChange={(e) => updateInputField(e)}
          value={data.tokenWebsite}
        ></input>
      </div>
      <div
        className="mt-3 text-white"
        style={{
          border: "none",
        }}
      >
        <p>Link Whitepaper *</p>
        <div style={{ position: "relative" }}>
          <img
            src={whitepaper}
            alt="whitepaper logo"
            className="h-100 d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              width: "3em",
              padding: ".7em",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <input
            type={"text"}
            className="h3em py-2 border-none rounded text-white w-100"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              padding: "0 1em 0 3.5em",
              border: "none",
              name: "whitepaper",
            }}
            name="tokenWhitepaper"
            onChange={(e) => updateInputField(e)}
            value={data.tokenWhitepaper}
          ></input>
        </div>
      </div>

      <div
        className="mt-3 text-white py-3"
        style={{
          border: "none",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <p>Facebook</p>
            <div style={{ position: "relative" }}>
              <img
                src={fb}
                alt="fb logo"
                className="h-100 d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  width: "3em",
                  padding: "1em",
                  borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <input
                type={"text"}
                className="h3em py-2 border-none rounded text-white w-100"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "0 1em 0 3.5em",
                  border: "none",
                  name: "facebook",
                }}
                name="tokenFacebook"
                onChange={(e) => updateInputField(e)}
                value={data.tokenFacebook}
              ></input>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <p className="mt-lg-0">Twitter</p>
            <div style={{ position: "relative" }}>
              <img
                src={twitter}
                alt="twitter logo"
                className="h-100 d-flex justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  width: "3em",
                  padding: "1em",
                  borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
              />
              <input
                type={"text"}
                className="h3em py-2 border-none rounded text-white w-100"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  padding: "0 1em 0 3.5em",
                  border: "none",
                  name: "twitter",
                }}
                name="tokenTwitter"
                onChange={(e) => updateInputField(e)}
                value={data.tokenTwitter}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3 row">
        <div className="col-lg-6 col-12">
          <p>Telegran</p>
          <div style={{ position: "relative" }}>
            <img
              src={telegram}
              alt="telegram logo"
              className="h-100 d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                width: "3em",
                padding: "1em",
                borderRight: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <input
              type={"text"}
              className="h3em py-2 border-none rounded text-white w-100"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                padding: "0 1em 0 3.5em",
                border: "none",
                name: "telegram",
              }}
              name="tokenTelegram"
              onChange={(e) => updateInputField(e)}
              value={data.tokenTelegram}
            ></input>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <p>Discord</p>
          <div style={{ position: "relative" }}>
            <img
              src={discord}
              alt="discord logo"
              className="h-100 d-flex justify-content-center align-items-center"
              style={{
                position: "absolute",
                width: "3em",
                padding: "1em",
                borderRight: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <input
              type={"text"}
              className="h3em py-2 border-none rounded text-white w-100"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                padding: "0 1em 0 3.5em",
                border: "none",
                name: "discord",
              }}
              name="tokenDiscord"
              onChange={(e) => updateInputField(e)}
              value={data.tokenDiscord}
            ></input>
          </div>
        </div>
      </div>
    </FormControl>
  );
}

export default Page3;
