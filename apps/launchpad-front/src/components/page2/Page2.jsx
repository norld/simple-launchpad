// import React, { useState, useEffect } from "react";
import {
  // Box,
  // InputLabel,
  // MenuItem,
  FormControl,
  // Select,
  // Input,
  // TextField,
} from "@mui/material";
import "./page2.css";

function Page2(props) {
  const { updateInput, data } = props;

  const updateInputField = (e) => {
    e.preventDefault();
    updateInput(e.target.name, e.target.value);
  };
  return (
    <FormControl className="w-100 text-white pt-4">
      <p>Currency *</p>
      <select
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "none",
        }}
        className="h3em py-2 px-3 border-none rounded text-white w-100"
        defaultValue={"WBNB"}
        onChange={(e) => updateInputField(e)}
        name="tokenCurrency"
        value={data.tokenCurrency}
      >
        <option value="WBNB" className="text-black bg-white">
          WBNB
        </option>
        <option value="BUSD" className="text-black bg-white">
          BUSD
        </option>
      </select>
      <div
        className="mt-3 text-white"
        style={{
          border: "none",
        }}
      >
        <p>Sale Type *</p>
        <select
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
          className="h3em py-2 px-3 border-none rounded text-white w-100"
          defaultValue={"Public"}
          onChange={(e) => updateInputField(e)}
          name="tokenSaleType"
          value={data.tokenSaleType}
        >
          <option value="Public" className="text-white bg-dark">
            Public
          </option>
          <option value="Private" className="text-white bg-dark">
            Private
          </option>
        </select>
      </div>

      <div
        className="mt-3 text-white py-3"
        style={{
          border: "none",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <p>Softcap *</p>
            <input
              type={"number"}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
              }}
              className="h3em py-2 px-3 border-none rounded text-white w-100"
              onChange={(e) => updateInputField(e)}
              name="tokenSoftcap"
              value={data.tokenSoftcap}
            ></input>
          </div>
          <div className="col-lg-6 col-12">
            <p className="mt-lg-0">Hardcap *</p>
            <input
              type={"number"}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
              }}
              className="h3em py-2 px-3 border-none rounded text-white w-100"
              onChange={(e) => updateInputField(e)}
              name="tokenHardcap"
              value={data.tokenHardcap}
            ></input>
          </div>
        </div>
      </div>
      <div className="my-3 row">
        <div className="col-lg-6 col-12">
          <p>Minimum Buy *</p>
          <input
            type={"number"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            onChange={(e) => updateInputField(e)}
            name="tokenMinimumBuy"
            value={data.tokenMinimumBuy}
          ></input>
        </div>
        <div className="col-lg-6 col-12">
          <p>Maximum Buy *</p>
          <input
            type={"number"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            onChange={(e) => updateInputField(e)}
            name="tokenMaximumBuy"
            value={data.tokenMaximumBuy}
          ></input>
        </div>
      </div>
      <div>
        <p style={{ color: "white", margin: "1em 0 0 0" }}>Listing on *</p>
        <select
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
          className="h3em py-2 px-3 border-none rounded text-white w-100"
          defaultValue={"pancakeswap"}
          onChange={(e) => updateInputField(e)}
          name="tokenListing"
          value={data.tokenListing}
        >
          <option value="pancakeswap" className="text-white bg-dark">
            Pancakeswap
          </option>
          <option value="uniswap" className="text-white bg-dark">
            Uniswap
          </option>
        </select>
      </div>
      <div
        className="mt-3 text-white"
        style={{
          border: "none",
        }}
      >
        <p>Price IDO (per 1 token) *</p>
        <input
          type={"text"}
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
          className="h3em py-2 px-3 border-none rounded text-white w-100"
          onChange={(e) => updateInputField(e)}
          name="tokenPriceIDO"
          value={data.tokenPriceIDO}
        />
      </div>
      <div
        className="mt-3 text-white"
        style={{
          border: "none",
        }}
      >
        <p>Price Launch (per 1 token) *</p>
        <input
          type={"text"}
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
          className="h3em py-2 px-3 border-none rounded text-white w-100"
          onChange={(e) => updateInputField(e)}
          name="tokenPriceLaunch"
          value={data.tokenPriceLaunch}
        />
      </div>
    </FormControl>
  );
}

export default Page2;
