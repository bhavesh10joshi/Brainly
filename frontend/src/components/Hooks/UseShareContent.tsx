import axios from "axios";
import { API_URL } from "../Util";
import { useState , useEffect } from "react";

interface ShareContentType {
  _id: string;
  links: string;
  type: string;
  title: string;
  tags: string[];
}

export function UseShareContent(Hash: string | undefined) {
  const [ShareContents, SetShareContents] = useState<ShareContentType[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/brain/${Hash}`).then((response) => {
      const data = response.data.msg;

      const normalized = Array.isArray(data) ? data : [data];

      SetShareContents(normalized);
    });
  }, [Hash]);

  return ShareContents;
}
