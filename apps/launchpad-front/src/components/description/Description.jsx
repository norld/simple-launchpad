import React from "react";

function Description() {
  return (
    <>
    <div className="py-5 mb-5">
      <span
        style={{
          background:
            "linear-gradient(96.51deg, #FF7171 2.96%, rgba(222, 28, 109, 0.78) 55.12%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontFamily: "Montserrat",
          fontWeight: 700,
          fontSize: "3rem",
        }}
      >
        DOOiT Launchpad is the Next Project in the TTD’s Ecosystem
      </span>
      <div className="d-flex" style={{ color: "white", flexDirection:"column", justifyContent:"space-between" }}>
        <span>Cross-chain project launches are increasingly commonplace.</span>
        <br />
        <span>
          As the crypto landscape has evolved to include more and more
          blockchains, most projects now have some degree of cross-chain focus
          on their roadmap — whether that be simply maintaining a token on
          multiple chains, or under assumption that they will eventually deploy
          their product on multiple platforms. With the advent of more capable
          cross-chain solutions like Substrate, Kusama, and Polkadot ecosystems,
          it is likely that cross-chain support will eventually become a
          necessity, rather than an option.
        </span>
        <br />
      </div>
    </div>
    </>
  );
}

export default Description;
