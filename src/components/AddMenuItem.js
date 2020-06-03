import React, { useState } from "react";

import { productData } from "../data/testproducts";

import { useHistory } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";

import { FaHome, FaPlus } from "react-icons/fa";

//Firebase Image Storage
import { storage } from "../firebase/firebase";

//UUID creator for naming images uniquely
import { v4 as uuidv4 } from "uuid";

import MenuItem from "./MenuItem";

import { addMenuItem as ADD_MENU_ITEM_MUTATION } from "../graphql/mutations/items";

import styled from "styled-components";

const Container = styled.div`
    background: #ededed;
    height: 100vh;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
    border-radius: 5px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
    border-radius: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px 0px;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const LeftHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const RightHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    padding: 10px 50px;
    background-color: #445a82;
    color: #fff;
`;

const HomeButton = styled.div`
    text-align: center;
    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 15px;
    color: #445a82;
`;

const ItemInputs = styled.input`
    margin: 15px 0px;
    height: 20px;
    border-radius: 5px;
    ::placeholder {
        font-size: 15px;
        padding: 10px;
    }
`;

const ButtonWrappers = styled.div`
    display: flex;
    justify-content: center;
`;

const AddMenuItemButton = styled.button`
    width: 45%;
    text-align: center;
    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 15px;
    color: #445a82;
`;

const PreviewWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const AddMenuItem = () => {
    //useMutation - API call to POST MenuItem Details to Db
    const [addItem, { loading, error }] = useMutation(ADD_MENU_ITEM_MUTATION, {
        // refetchQueries: ["getEducationByDraft"],
        onCompleted(data) {
            console.log(data, "\n Rannnnnnnn Add Add Menu Item");
        },
    });

    // const allInputs = { imgUrl: "" };
    const [imageAsFile, setImageAsFile] = useState("");
    const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
    const [prevURL, setPrevUrl] = useState("");

    //Holds New Menu Item to be uploaded
    const [menuItem, setMenuItem] = useState({
        businessId: 1,
        category: "",
        itemName: "",
        description: "",
        price: "",
        imageURL: "",
        imageName: "",
    });

    //Instantiate useHistory for access to .push() redirect
    const history = useHistory();

    const handleChange = (e) => {
        setMenuItem({ ...menuItem, [e.target.name]: e.target.value });

        console.log(menuItem, "\n menuItem");
    };

    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setImageAsFile((imageFile) => image);

        //Create a localized URL for image preview and sets it in state
        setPrevUrl(URL.createObjectURL(image));

        console.log(imageAsFile, "\n Image As File");
    };

    //START firebase helper functions
    function delay(t, v) {
        return new Promise(function (resolve) {
            setTimeout(resolve.bind(null, v), t);
        });
    }

    function keepTrying(triesRemaining, storageRef) {
        if (triesRemaining < 0) {
            return Promise.reject("out of tries");
        }

        return storageRef
            .getDownloadURL()
            .then((url) => {
                return url;
            })
            .catch((error) => {
                switch (error.code) {
                    case "storage/object-not-found":
                        return delay(2000).then(() => {
                            return keepTrying(triesRemaining - 1, storageRef);
                        });
                    default:
                        console.log(error);
                        return Promise.reject(error);
                }
            });
    }
    //END firebase helper functions

    let baseName = "";
    let ext = "";
    const dimension = "_150x140";

    const handleAddMenuItem = () => {
        console.log("start of upload");

        // async magic goes here...

        if (imageAsFile === "") {
            console.log(
                `not an image, the image file is a ${typeof imageAsFile}`
            );
        }

        //create a universal unique ID to name the photo in firebase storage
        //and avoid naming conflicts
        const uuid = uuidv4();

        //Original upload algo
        // const uploadTask = storage
        //     .ref(`/images/${imageAsFile.name}`)
        //     .put(imageAsFile);

        //get file extension
        [baseName, ext] = imageAsFile.name.split(".");

        const uniqueFilename = uuid + "." + ext;

        //Revised upload algo to set name of saved file diff than name of oploaded file
        const uploadTask = storage
            .ref(`/images/bid_1`)
            .child(uniqueFilename)
            .put(imageAsFile);

        //initiates the firebase side uploading
        uploadTask.on(
            "state_changed",
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                console.log(snapShot, "\n Snapshot");
            },
            (err) => {
                //catches the errors
                console.log(err);
            },
            () => {
                const resizedFileName = uuid + dimension + "." + ext;

                const storageRef = storage
                    .ref("images/bid_1")
                    .child(resizedFileName);

                keepTrying(10, storageRef)
                    .then((url) => {
                        setImageAsUrl({ imgUrl: url });

                        setMenuItem({
                            ...menuItem,
                            imageName: resizedFileName,
                        });
                        //add item mutation Here ***
                        addItem({
                            variables: {
                                input: {
                                    businessId: 1,
                                    itemName: menuItem.itemName,
                                    category: menuItem.category,
                                    description: menuItem.description,
                                    price: parseFloat(menuItem.price),
                                    imageURL: url,
                                    imagename: resizedFileName,
                                },
                            },
                        });
                    })
                    .catch((error) => {
                        console.log(error, "\n Resize retry helper Fail");
                    });
            }
        );
    };

    //Deletes image from Storage
    const deleteImageUpload = (e) => {
        try {
            storage.ref("images/bid_1").child(e.target.name).delete();
            console.log("Image Deleted from Firebase");
        } catch (error) {
            console.log(error, "Firebase Delete Image Error");
        }
    };

    return (
        <>
            <Container>
                <HeaderWrapper>
                    <LeftHeader>
                        <h2>Add Menu Item Screen</h2>
                    </LeftHeader>
                    <RightHeader>
                        <HomeButton onClick={() => history.push("/")}>
                            <FaHome style={{ marginRight: "5px" }} />
                            Dashboard
                        </HomeButton>
                    </RightHeader>
                </HeaderWrapper>
                <Wrapper>
                    <Form>
                        <label htmlFor="category">Category</label>
                        <ItemInputs
                            name="category"
                            type="text"
                            placeholder="Enter Category "
                            onChange={handleChange}
                            value={menuItem.category}
                        />

                        <label htmlFor="product">Product</label>
                        <ItemInputs
                            name="itemName"
                            type="text"
                            placeholder="Enter Item Name"
                            onChange={handleChange}
                            value={menuItem.itemName}
                        />

                        <label htmlFor="description">Description</label>
                        <ItemInputs
                            name="description"
                            type="text"
                            placeholder="Provide Description"
                            onChange={handleChange}
                            value={menuItem.description}
                        />
                        <label htmlFor="price">Price</label>
                        <ItemInputs
                            name="price"
                            type="number"
                            placeholder="Enter Item Price"
                            onChange={handleChange}
                            value={menuItem.price}
                        />

                        {prevURL && (
                            <PreviewWrapper>
                                <img
                                    style={{ width: "150px", height: "140px" }}
                                    src={prevURL}
                                    alt="Prev URL"
                                />
                            </PreviewWrapper>
                        )}

                        <ItemInputs type="file" onChange={handleImageAsFile} />
                    </Form>
                    <ButtonWrappers>
                        <AddMenuItemButton onClick={handleAddMenuItem}>
                            <FaPlus /> Add Menu Item
                        </AddMenuItemButton>
                    </ButtonWrappers>
                    {imageAsUrl.imgUrl && (
                        <div>
                            <img
                                style={{ width: "150px", height: "140px" }}
                                src={imageAsUrl.imgUrl}
                                alt={menuItem.itemName}
                            />
                            <button
                                name={menuItem.imageName}
                                onClick={deleteImageUpload}
                            >
                                Delete Image
                            </button>
                        </div>
                    )}
                </Wrapper>
                <ResultsWrapper>
                    <h2>Current Menu Items</h2>
                    {productData.products.map((item) => (
                        <MenuItem key={item.productId} item={item} />
                    ))}
                </ResultsWrapper>
            </Container>
        </>
    );
};

export default AddMenuItem;
