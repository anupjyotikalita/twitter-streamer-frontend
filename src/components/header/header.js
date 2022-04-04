import { Col, Row, Input } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import NotificationBadge from 'components/notificationBadge';
import { submitSearchWord } from 'utils/redux/actions/actions';
import Styles from './header.module.css';

const { Search } = Input;
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={Styles.container}>
      <Row
        gutter={[8, {
          xs: 16, sm: 16, md: 16, lg: 8, 
        }]}
      >
        <Col xs={24} sm={24} md={24} lg={8} className={Styles.nameContainer}>
          Tweet Streamer
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} className={Styles.searchBarContainer}>
          <Search
            placeholder="input search text"
            size="medium"
            onSearch={searchText => dispatch(submitSearchWord(searchText))}
            enterButton
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8}>
          <NotificationBadge />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
