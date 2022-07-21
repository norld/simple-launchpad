import React, { useEffect } from "react";
import {
  // Box,
  // InputLabel,
  // MenuItem,
  FormControl,
  // Select,
  // Input,
  // TextField,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import paperUpload from "../../assets/Iconspaperupload.svg";
import "./page1.css";

function Page1(props) {
  const { updateInput, data, chainsList } = props;
  const { acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/png",
      maxFiles: 1,
    });

  useEffect(() => {
    updateInput("tokenLogo", acceptedFiles[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  const updateInputField = (e) => {
    e.preventDefault();
    updateInput(e.target.name, e.target.value);
  };

  return (
    <FormControl className="w-100 text-white pt-4">
      <p>Chain *</p>
      <select
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          border: "none",
        }}
        className="h3em py-2 px-3 border-none rounded text-white w-100"
        // defaultValue={"BSC"}
        value={data.tokenChain}
        name="tokenChain"
        onChange={(e) => updateInputField(e)}
      >
        {chainsList.length ? (
          chainsList.map((item, idx) => {
            return <option value={item.attributes.ChainID} className="text-white bg-black">
              {item.attributes.ChainName}
            </option>;
          })
        ) : (
          <option value="0" className="text-white bg-black">
            Binance Smart Chain
          </option>
        )}
      </select>
      <div
        className="mt-3 text-white"
        style={{
          border: "none",
        }}
      >
        <p>Token Address *</p>
        <input
          type={"text"}
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
          className="h3em py-2 px-3 border-none rounded text-white w-100"
          name="tokenAddress"
          value={data.tokenAddress}
          onChange={(e) => updateInputField(e)}
        />
      </div>

      <div
        className="mt-3 text-white py-3"
        style={{
          border: "none",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-12">
            <p>Token Name *</p>
            <input
              type={"text"}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
              }}
              className="h3em py-2 px-3 border-none rounded text-white w-100"
              name="tokenName"
              onChange={(e) => updateInputField(e)}
              value={data.tokenName}
            ></input>
          </div>
          <div className="col-lg-6 col-12">
            <p className="mt-lg-0">Token Symbol *</p>
            <input
              type={"text"}
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "none",
              }}
              className="h3em py-2 px-3 border-none rounded text-white w-100"
              name="tokenSymbol"
              onChange={(e) => updateInputField(e)}
              value={data.tokenSymbol}
            ></input>
          </div>
        </div>
      </div>
      <div className="my-3 row">
        <div className="col-lg-6 col-12">
          <p>Total Supply *</p>
          <input
            type={"text"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            name="tokenTotalSupply"
            onChange={(e) => updateInputField(e)}
            value={data.tokenTotalSupply}
          ></input>
        </div>
        <div className="col-lg-6 col-12">
          <p>Token Decimal *</p>
          <input
            type={"number"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            name="tokenDecimal"
            onChange={(e) => updateInputField(e)}
            value={data.tokenDecimal}
          ></input>
        </div>
      </div>
      <div className="my-3 row">
        <div className="col-lg-6 col-12">
          <p>Supply for Presale*</p>
          <input
            type={"text"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            name="tokenSupplyForPresale"
            onChange={(e) => updateInputField(e)}
            value={data.tokenSupplyForPresale}
          ></input>
        </div>
        <div className="col-lg-6 col-12">
          <p>Supply for Liquidity *</p>
          <input
            type={"text"}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "none",
            }}
            className="h3em py-2 px-3 border-none rounded text-white w-100"
            name="tokenSupplyForLiquidity"
            onChange={(e) => updateInputField(e)}
            value={data.tokenSupplyForLiquidity}
          ></input>
        </div>
      </div>
      <p style={{ color: "white", margin: "1em 0 0 0" }}>Token Logo *</p>
      <section>
        <div
          {...getRootProps({ className: "dropzone" })}
          className="uploadFile"
        >
          <input {...getInputProps()} name="tokenLogo" />
          {acceptedFiles[0] ? (
            <>
              <img
                src={URL.createObjectURL(acceptedFiles[0])}
                alt="received logo"
                style={{ width: "40%", height: "100%" }}
              />
            </>
          ) : (
            <>
              <img src={paperUpload} alt="paper upload" />
              <em>File.svg (200x200)</em>
            </>
          )}
        </div>
      </section>
      <div>
        <p style={{ color: "white", margin: "1em 0 0 0" }}>Description *</p>
        <textarea
          name="tokenDescription"
          id="description"
          rows="4"
          className="addDescription"
          placeholder="Describe your token"
          onChange={(e) => updateInputField(e)}
          value={data.tokenDescription}
        ></textarea>
      </div>
    </FormControl>
  );
}

export default Page1;
