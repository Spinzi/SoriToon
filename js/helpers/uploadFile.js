const CLOUD_NAME = "dhvec98ic";
const UPLOAD_PRESET = "basic_1";

// const file = document.getElementById("img").files[0];
// if (!file) {
//     alert("Please select an image first.");
//     return;
// }
// uploadImage(file);

export async function uploadImage(file) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
        throw new Error("Upload failed");
    }

    return data.secure_url;
}