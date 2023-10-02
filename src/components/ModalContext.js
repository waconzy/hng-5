'use client';
// ModalContext.js
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
	const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
	// const [addTaskModalData, setAddTaskModalData] = useState(null);

	const openAddTaskModal = () => {
		setIsAddTaskModalOpen(true);
		// setAddTaskModalData({ columnId });
	};

	const closeAddTaskModal = () => {
		setIsAddTaskModalOpen(false);
		// setAddTaskModalData(null);
	};

	return (
		<ModalContext.Provider
			value={{
				isAddTaskModalOpen,
				openAddTaskModal,
				closeAddTaskModal,
				// addTaskModalData,
			}}>
			{children}
		</ModalContext.Provider>
	);
}

export function useModal() {
	return useContext(ModalContext);
}
