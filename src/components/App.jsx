import { useState } from 'react';
import Searchbar from './Searchbar';

import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Loader from './Loader';
import Section from './Section';
import LoadMore from './Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [status, setStatus] = useState('');
  const [isLoadMore, setIsLoadMore] = useState(false);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  const toggleModal = modalData => {
    setModalData(modalData);
    setModalVisible(({ modalVisible }) => ({ modalVisible: !modalVisible }));
  };

  const toggleLoadMore = isLoadMore => {
    setIsLoadMore(isLoadMore);
  };

  const changeStatus = status => {
    setStatus(status);
  };

  const handleLoadMore = () => {
    setPage(({ page }) => ({ page: page + 1 }));
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <Section>
        {modalVisible && <Modal dataModal={modalData} onClose={toggleModal} />}
        <ImageGallery
          page={page}
          query={query}
          onClick={toggleModal}
          changeStatus={changeStatus}
          toggleLoadMore={toggleLoadMore}
          status={status}
        />
        {status === 'pending' && <Loader />}

        {status !== 'pending' && isLoadMore && (
          <LoadMore onClick={handleLoadMore} />
        )}
      </Section>
    </>
  );
};
