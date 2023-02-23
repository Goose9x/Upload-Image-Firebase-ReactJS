import "./App.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// ref để lấy link ảnh, uploadBytes để up ảnh lên firebase
// listAll đẻ get ảnh
import { v4 } from "uuid"; // randomize letter
function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload === null) return;
    console.log(imageUpload);
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
        alert("Image Upload Oke");
      });
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((res) => {
      console.log(res.items);
      res.items.forEach((e) => {
        getDownloadURL(e).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className='App'>
      <input
        type='file'
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
      <div>
        <button onClick={uploadImage}> Upload Image</button>
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {imageList.map((url, i) => {
          return (
            <>
              <div
                style={{
                  width: "calc(100%/4 )",
                  height: "200px",
                  border: "1px solid gray",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  key={i}
                  src={url}
                  alt=''
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
