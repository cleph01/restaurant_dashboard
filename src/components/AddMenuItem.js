import React, { useState } from "react";

import { productData } from "../data/testproducts";

import { useHistory } from "react-router-dom";

import { FaHome } from "react-icons/fa";

import { storage } from "../firebase/firebase";

import MenuItem from "./MenuItem";

import Footer from "./Footer";

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

const SubmitButton = styled.button`
    text-align: center;
    padding: 8px;
    background-color: #f9f9f9;
    border-radius: 5px;
    font-size: 15px;
    color: #445a82;
`;

const AddMenuItem = () => {
    const allInputs = { imgUrl: "" };
    const [imageAsFile, setImageAsFile] = useState("");
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    const history = useHistory();

    //variables for Mutation
    // const [saveImageURL, { data }] = useMutation(ADD_TODO);

    console.log(imageAsFile, "Image As File");

    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setImageAsFile((imageFile) => image);
    };

    const handleFireBaseUpload = (e) => {
        e.preventDefault();
        console.log("start of upload");

        // async magic goes here...

        // if (imageAsFile === "") {
        //     console.log(
        //         `not an image, the image file is a ${typeof imageAsFile}`
        //     );
        // }

        // const uploadTask = storage
        //     .ref(`/images/${imageAsFile.name}`)
        //     .put(imageAsFile);

        //initiates the firebase side uploading
        // uploadTask.on(
        //     "state_changed",
        //     (snapShot) => {
        //         //takes a snap shot of the process as it is happening
        //         console.log(snapShot);
        //     },
        //     (err) => {
        //         //catches the errors
        //         console.log(err);
        //     },
        //     () => {
        //         // gets the functions from storage refences the image storage in firebase by the children
        //         // gets the download url then sets the image from firebase as the value for the imgUrl key:
        //         storage
        //             .ref("images")
        //             .child(imageAsFile.name)
        //             .getDownloadURL()
        //             .then((fireBaseUrl) => {
        //                 setImageAsUrl((prevObject) => ({
        //                     ...prevObject,
        //                     imgUrl: fireBaseUrl,
        //                 }));
        //             });
        //     }
        // );
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
                    <Form onSubmit={handleFireBaseUpload}>
                        <label for="category">Category</label>
                        <ItemInputs
                            name="category"
                            type="text"
                            placeholder="Enter Category "
                        />

                        <label for="product">Product</label>
                        <ItemInputs
                            name="product"
                            type="text"
                            placeholder="Enter Item Name"
                        />

                        <label for="description">Description</label>
                        <ItemInputs
                            name="description"
                            type="text"
                            placeholder="Provide Description "
                        />
                        <label for="price">Price</label>
                        <ItemInputs
                            name="price"
                            type="number"
                            placeholder="Enter Item Price"
                        />

                        <ItemInputs type="file" onChange={handleImageAsFile} />
                        <SubmitButton>Submit</SubmitButton>
                    </Form>
                    {imageAsUrl.imgUrl && (
                        <img src={imageAsUrl.imgUrl} alt="image tag" />
                    )}
                </Wrapper>
                <ResultsWrapper>
                    <h2>Current Menu Items</h2>
                    {productData.products.map((item) => (
                        <MenuItem item={item} />
                    ))}
                </ResultsWrapper>
            </Container>
        </>
    );
};

export default AddMenuItem;
