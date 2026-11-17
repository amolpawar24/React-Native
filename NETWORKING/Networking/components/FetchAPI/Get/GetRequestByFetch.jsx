import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GetRequestByFetch() {
  // States
  const [postLists, setPostLists] = useState([]);
  const [loading, setLoading] = useState(true);

  // hooks
  useEffect(() => {
    fetchData();
  });

  // GET Posts functions

  const fetchData = async (limit = 10) => {
    try {
      const response = fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );

      if (!response.ok) {
        throw new Error("Failed To Fetch Posts");
      } else {
        const data = (await response).json();
        setPostLists(data);
      }
    } catch {
      console.log("Fetch Error : ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView>
      {
        loading ? 
        (   <ActivityIndicator 
            />
        ) : 
        (
            <FlatList data={postLists} 
            />
        )
    }
    </SafeAreaView>
  );
}
