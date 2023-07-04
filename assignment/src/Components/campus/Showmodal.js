import "./Showmodal.css"

const MyModal = ({ closeModal }) => {
  

  return (
    <div className="modal">
      <div class="modal-header">
        <h1>Campus Tour</h1>

        </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
        inventore facere quam, rem itaque id vel ducimus ab reprehenderit sed
        adipisci quidem, dolorum at voluptas doloremque quos aliquam tenetur,
        esse ea. Veniam sed dolor quas ducimus quasi doloribus modi, sequi quod
        recusandae veritatis quis porro soluta voluptate dignissimos aliquam
        expedita. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
        sequi enim nostrum repellendus nemo velit vero repudiandae dolore

        explicabo error eius ipsa modi, inventore optio delectus libero
        aspernatur mollitia blanditiis voluptatum facere magnam fugit
        perferendis sint! Reprehenderit aut provident esse illum sed cumque
        quis, quibusdam et tempore quod itaque ratione?
      </p>

      <button className="modal-btn" onClick={closeModal}>
        Close
      </button>
    </div>
  );
};

export default MyModal;
