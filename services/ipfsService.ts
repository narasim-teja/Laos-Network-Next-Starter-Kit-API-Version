import axios from 'axios';

const PINATA_API_URL = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
const PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/';

interface IpfsResponse {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
}

export const uploadToIPFS = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post<IpfsResponse>(PINATA_API_URL, formData, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return `${PINATA_GATEWAY}${response.data.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading to IPFS:', error);
    throw new Error('Failed to upload to IPFS');
  }
}; 