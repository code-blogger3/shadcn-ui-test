const [isModalOpen, setIsModalOpen] = useState(false);
    return (
      <div className="someTaliwindCSS">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="someTaliwindCSS"
        >
          Open Modal
        </button>
        </div>
    )