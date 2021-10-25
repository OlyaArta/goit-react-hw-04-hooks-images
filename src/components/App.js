import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Searchbar from "./Searchbar/Searchbar.js";
import fetchImages from "./services/API";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Spinner from "./Loader/Loader";
import Button from "./Button/Button";

export default function App() {
  // state = {
  //   searchQuery: "",
  //   images: [],
  //   page: 1,
  //   showModal: false,
  //   loading: false,
  //   largeImage: "",
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  // const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function example() {
      try {
        setLoading(true);
        const images = await fetchImages(searchQuery, page);
        setImages((prevImages) => [...prevImages, ...images]);
      } catch (error) {
        // setError(error);
        toast.error(error.message, { theme: "colored" });
      } finally {
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      }
      setLoading(false);
    }
    example();
  }, [searchQuery, page]);

  // async componentDidUpdate(prevProps, prevState) {
  //   const prevSearch = prevState.searchQuery;
  //   const nextSearch = this.state.searchQuery;

  //   const prevPage = prevState.page;
  //   const nextPage = this.state.page;

  //   if (prevSearch !== nextSearch || prevPage !== nextPage) {
  //     try {
  //       setLoading(true);
  //       const images = await fetchImages(nextSearch, nextPage);

  //       this.setState((prevState) => ({
  //         images: [...prevState.images, ...images],
  //       }));
  //     } catch (error) {
  //       // this.setState({ error });
  //       setError(error);
  //       toast.error(error.message, { theme: "colored" });
  //     } finally {
  //       if (prevState.images.length > 5) {
  //         window.scrollTo({
  //           top: document.documentElement.scrollHeight,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //     setLoading(false);
  //   }
  // }

  function handleFormSubmit(searchQuery) {
    cleanPage();
    // this.setState({ searchQuery });
    setSearchQuery(searchQuery);
  }

  const cleanPage = () => {
    setSearchQuery("");
    setPage(1);
    setImages([]);
    setShowModal(false);
  };

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  // openModal = (largeImageUrl, tags) => {
  //   this.setState({ alt: tags, showModal: true });
  // };

  // closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const clickImages = (e) => {
    const modalImg = e.currentTarget.alt;
    // this.setState({ showModal: true, largeImage: modalImg });
    setShowModal(true);
    setLargeImage(modalImg);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery img={images} clickImages={clickImages} />
      )}
      {images.length > 1 && <Button onClick={loadMore} />}
      {showModal && <Modal onClick={toggleModal} largeImage={largeImage} />}
      {loading && <Spinner />}
      <ToastContainer autoClose={2500} />
    </div>
  );
}
