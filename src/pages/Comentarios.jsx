import React from 'react'
import {FaComment, FaShare} from 'react-icons/fa'
import {AiFillLike } from 'react-icons/ai'
import {  Text } from '@nextui-org/react'

export const Comentarios = () => {
  return (
    <section style={{backgroundColor:"#eee"}}>
      <Text h2>Comentarios</Text>
      <div className="container my-5 py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-lg-10 col-xl-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-start align-items-center">
                  <img className="rounded-circle shadow-1-strong me-3"
                    src="data:image/png;base64,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" alt="avatar" width="60"
                    height="60" />
                  <div>
                    <h4 className="fw-bold text-primary mb-1">Ana Alomar</h4>
                    <p className="text-muted small mb-0">
                      Comentario publicado - Enero 2022
                    </p>
                  </div>
                </div>

                <p className="mt-3 mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
                </p>

                <div className="small d-flex justify-content-start">
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i><AiFillLike/></i>
                    <p className="mb-0">Me gusta   |</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i><FaComment/></i>
                    <p className="mb-0"> Comenta   |</p>
                  </a>
                  <a href="#!" className="d-flex align-items-center me-3">
                    <i><FaShare/></i>
                    <p className="mb-0">Comparte</p>
                  </a>
                </div>
              </div>
              <div className="card-footer py-3 border-0" style={{backgroundColor:"#f8f9fa"}}>
                <div className="d-flex flex-start w-100">
                  <img className="rounded-circle shadow-1-strong me-3"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXFxcX////Kysp5eXqcnJzCwsLT09P8/Pz39/fk5OTv7+/b29v29vbPz8/X19ft7e3i4uJMTE2Dg4P2ERc0AAAGrklEQVR4nO2d25bqKhBFIx6M5mLs/f8fexLTvdXeEQpqLQIO1mO/dOYoqBtQNl/Hz9ZXcxzNJ2s8NkfTfLJMJSxelbB8VcLyVQnLVyUsX5WwfFXC8lUJy1clLF+VsHxVwvJVCctXJSxflbB8VcLyVQnLVyUsX5WwfFVCuOyilP8wGeGCZcbT6drPOp3Gcf0TX2kIbWOut2k4t4dvtbO6Sz82fMgEhNacLsNhW23Xj2RTsgmtuU7nN3jf6nrDZOQS2ubStm6+1ZJEQzIJ7dgJ8Fade9aW5BFaM0nxvhk5dmQRWnPxbL+NtXpiILII+1C+uy4En0MhDF2gDw1XOCKD0I7vwp/EjOCPoRDexB50Sx14peIJzUXDN2vAOhw8YacEnOMGdDOCCa3RA87qgYhgQqPwMc+64RCxhBZiwUW4vYglhAHOiKhvQhJarRd91hn1VUBC2wMB56ABWqdAQgMFnLMbDCKO0ETl2i5hYgaOELkJV7WQD0MR2isccE5RAR8GI0SF+lf1iC8DEd4YgJCQASLEu5lVgOwNRAhMZl7U6rM3CKE9qWpelybtt4FsyDIhwogQQtYuXKR2pxBCfLB/SO1OEYRME+pzNwAhJZ15qMuAMLb9K5M2OwUQchepOurrCcmLVL1MAYRMT7qoVX0egpBSVTxL5031hIaWsf1I185QE4L7T1vSbUQ9IXsbajeinpAbDe+E476EdEdzOKjOotSEfEejdDWV0Cd74gMepkpIJeSHw7kK/nhC1TFUEYTVhuUTfr4NVal3jRZejR9P+PFZW2PJnbZFqjaGnpB3KvOjVnV7qIgKWLeN1ISc8+1nnTXfB+i18cOFypUiuvp0V6Nr6wM6wnRXo+zn6gnZedug+jwEIe+awirdNoScAZP7icp77YgTUm680B7kI2w4Upep9pop5C4G1ZtqL3wjCKk1ovpSFOZOFNHXqN/PYO618XyNMhiiCInXMfR3vTGEtLwGcA8adUeY5E7HbG7QkhpS+tulwNcIjON8yHMEGCGj53aDfBiKkBD2tbcSV+HezMCvnQyg10rAt2tgfwp6ZIl8f4iN+6i3wNAXlshqHzZ5APpKFnjVVNm6eBL4pTMqe8O40bvQEwcwiB3yAT2YELJQEcnaX8GnRtiruhzGjjfBz8WwJyUi4lnlkwjTW6xqugl4sglrxlDcDKVFE6AifBVnTlT0SiXMNCNNwrL2FmHGiTGzjTavzTZ9YA6HHp/0Ldq8tqYPPeDvOGP3OJ6mGaeYjXieTBH7cDbfEFtktAPckPicprnqKuHuimVET8Kyvb7Sx25IbH3Y6JPSuwagHaGEmFFmd+HqJ2CvrbkgW6btBWRGXL80Phd9I9DoPRjhROh5QyphEKG2JnwjRCmFIdTN83So1R9dZD8XQ93SANz64oyI+qtBWRMDXjqzr7K3Op+qf1GS4K7+njfZE7zkXqS5+aUkTAOo8jc6wlSAGkQVIf+pxUPRL/Q0hCkB4y8PKQjTLdFVkQs1njA1YCxiNCH/qcy/ikpSIwmTPB3dQIxwN3GE9BcI7xRRTcURjgkeHW7qHD7IJYoQ2HEKVfhFqRjCRMnotoKvoUQQJnhx6FJooRFByH1A4lUbWBFHEO7lZX4U+EwomDDBu1+fwrZiKKG97rtGF4W1NYJtuPcaXRT09DmQcNdA8VBIVyOMkD7JU6qAkBFIuF8y86qA25lBhDtVFFuSVxlhNtzfj/5IPi0yhHDndO1VYmcTQrhbzbSls/T1bAjh/tnMs6SZjZwwyUSoEAkzmwAb5mVC8Rm4mDA7E0qbNnIb5mZCadiXEuZQU/yWrMYQE+aRcr9K5E6lhOyfB4iSqNoXEmZpQtlJhpAwSxPKjCgjzKYu/C2BrxHaMJe68LcEx6Yywp1bpO8lGEgvIszUzyzyF1EyGyaYnR8p/3QXEWF+KelD3uRUQpjxIhUsUwlhpsFwlTckSghzXqRzSNQTZr1I/ctUYsNcw/0qX9AXEKaYZ62RJ+j7CTNqdG/Lc4YhIMx7kXqbGYJVmnOsWOQ5TfQT5r4NfRvRS5jVYcW23OdQfsL8uoi/5W5I+Vdp7tvQtxG9hGbv7xfIDeAjzDspXeU8aPMRZp6UrnKmpl7C/B2NJ+Z7V2muPahnOV3NRxA6ry34CPPPaBa5shofYQmu1F3newizL51WuQooH2EJwcIdLnyEuReHq1zhwkeYb7f7Wa6fnvN5mhKCxRwuFIR7f7tQ8YQlVBaLHAHxQwhdCDPhaN6qjHA4B8T3COOx+Tq+15//ytAfB8PX/4Jqc59YJrW/AAAAAElFTkSuQmCC" alt="avatar" width="40"
                    height="40" />
                  <div className="form-outline w-100">
                    <textarea className="form-control" id="textAreaExample" rows="4"
                      style={{background:"#fff"}}></textarea>
                    <label className="form-label" for="textAreaExample">Mensaje</label>
                  </div>
                </div>
                <div className="float-end mt-2 pt-1">
                  <button type="button" className="btn btn-primary btn-sm">Enviar comentario</button>
                  <button type="button" className="btn btn-outline-primary btn-sm">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

