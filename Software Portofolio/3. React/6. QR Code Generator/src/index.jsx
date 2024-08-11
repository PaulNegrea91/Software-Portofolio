import { useState } from "react";
import QRCode from "qrcode.react";
import "./index.css";


export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QRCode Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button disabled={input.trim() === ""} onClick={handleGenerateQrCode}>
          Generate
        </button>
      </div>
      <div>
        {qrCode && (
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        )}
      </div>
    </div>
  );
}
