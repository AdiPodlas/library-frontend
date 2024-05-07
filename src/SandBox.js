import React from "react";
import Modal from "./Modal";

const SandBox = () => {
    return (
        <div>
            <Modal title="pierwsza wiadomość" closeable={true}>
                Dawaj kase
                <img
                    src="https://gallerix.pl/gallery/4/5/9/2/36740-800.jpg"
                    style={{
                        height: "100px",
                        display: "block",
                        width: "100%",
                        objectFit: "contain",
                    }}
                />
                <hr />
                Dawaj szmal
            </Modal>

            <Modal title="druga wiadomość" closeable={true}>
                Hello World
            </Modal>
        </div>
    );
};

export default SandBox;