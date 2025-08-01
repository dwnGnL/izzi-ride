'use client';
import type { FC, Dispatch, SetStateAction } from 'react';
import type { Worker } from '@type/team.type';
import { useState } from 'react';

import AnimBlock from '@hoc/animated-block/animated-block';
import Modal from '@common/modal/modal';

import { workers } from '@constants/team';
import { TEAM } from '@constants/section';
import styles from './team.module.css';

const TeamSection = () => {
  const [openedWorker, setOpenedWorker] = useState<Worker | null>(null);

  return (
    <section data-title={TEAM} className={styles.section}>
      <AnimBlock>
        <h3>{TEAM}</h3>

        <div className={styles.worker_list}>
          {workers.map(worker => (
            <WorkerCard worker={worker} key={worker.name} setWorker={setOpenedWorker} />
          ))}
        </div>
      </AnimBlock>

      {openedWorker && (
        <Modal close={() => setOpenedWorker(null)}>
          <ModalContent worker={openedWorker} />
        </Modal>
      )}
    </section>
  );
};

const WorkerCard: FC<{
  worker: Worker;
  setWorker: Dispatch<SetStateAction<Worker | null>>;
}> = ({ worker, setWorker }) => {
  return (
    <div className={styles.worker_card} onClick={() => setWorker(worker)}>
      <div className={styles.image}>
        <div
          className={styles.image_inner}
          style={{ backgroundImage: `url(${worker.image.src})` }}
        />
      </div>
      <strong className={styles.name}>{worker.name}</strong>
      <div className={styles.position}>{worker.position}</div>
      <em className={styles.location}>{worker.location}</em>
    </div>
  );
};

const ModalContent: FC<{ worker: Worker }> = ({ worker }) => {
  return (
    <div className={styles.modal_about}>
      <div className={styles.modal_header}>
        <h4>{worker.name}</h4>
        <div>{worker.position}</div>
        <em className={styles.location}>{worker.location}</em>
      </div>
      <div className={styles.about} dangerouslySetInnerHTML={{ __html: worker.about }}></div>
    </div>
  );
};

export default TeamSection;
