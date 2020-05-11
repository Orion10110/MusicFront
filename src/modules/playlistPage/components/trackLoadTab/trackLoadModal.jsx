import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components/button';
import { Modal } from 'modules/modal/modal';
import TrackLoadTab from './trackLoadTab';
import { FaFileUpload } from 'react-icons/fa';

export default function TrackLoadTabModal({ playlistId, updateData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const close = () => setIsModalOpen(false);

    return (
        <>
            <Button
                isMain={false}
                buttonStyle="roundTransparent"
                onClick={() => setIsModalOpen(true)}
                style={{ marginRight: '10px' }}
            >
                <FaFileUpload />
                Добавить трек
                </Button>
            {
                isModalOpen
                    ? <Modal onClose={close}>
                        <TrackLoadTab
                            modalClose={() => { close(); }}
                            playlistId={playlistId}
                            updateData={updateData}
                        />
                    </Modal>
                    : null
            }
        </>
    );
};

TrackLoadTabModal.propTypes = {
    playlistId: PropTypes.number,
    updateData: PropTypes.func
};

TrackLoadTabModal.defaultProps = {
    playlistId: 0,
    updateData: () => 1
};
