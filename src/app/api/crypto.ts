import * as aws from "aws-sdk";
import { CiphertextType } from "aws-sdk/clients/kms";
import config from "config";

export const encryptData = async (data: any) => {
  // convert to encrypted buffer
  const payloadToEncryptBuffer: Buffer = toBuffer(data);

  const encryptedBlob: CiphertextType | undefined = await encryptKms(
    payloadToEncryptBuffer
  );

  let encryptedData;

  // Check if encryptedBlob is a Buffer
  if (encryptedBlob && Buffer.isBuffer(encryptedBlob)) {
    encryptedData = encryptedBlob.toString("base64");
  }

  return encryptedData || null;
};

export const toBuffer = (data: any): Buffer => {
  let buffer: Buffer;
  if (typeof data === "string") {
    buffer = Buffer.from(data);
  } else if (typeof data === "object" && data !== null) {
    const json = JSON.stringify(data);
    buffer = Buffer.from(json);
  } else {
    throw new Error("Invalid data type. Expected string or object.");
  }
  return buffer;
};

const encryptKms = async (buffer: Buffer) => {
  try {
    const kmsClient = new aws.KMS({
      region: config.AWS_REGION,
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    });

    const params: aws.KMS.Types.EncryptRequest = {
      KeyId: config.AWS_KEY_ID || "",
      Plaintext: buffer,
      EncryptionContext: {
        key: config.AWS_SECRET_KEY || "",
      },
    };

    const encryptedBuffer = await kmsClient.encrypt(params).promise();

    const blobData = encryptedBuffer.CiphertextBlob;

    return blobData;
  } catch (error) {
    return;
  }
};
