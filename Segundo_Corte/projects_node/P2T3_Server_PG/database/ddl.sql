CREATE TABLE public.rol
(
    codrol serial NOT NULL,
    namerol varchar(500) NOT NULL,
    PRIMARY KEY (codrol)
);

ALTER TABLE public.rol
    OWNER to postgres;


CREATE TABLE public.user
(
    coduser serial NOT NULL,
    codrol integer NOT NULL,
    email varchar(200) NOT NULL,
    password varchar(150) NOT NULL,
    PRIMARY KEY (coduser)
);

ALTER TABLE public.user
    OWNER to postgres;

CREATE UNIQUE INDEX ind_email ON public.user(email);

ALTER TABLE public.user ADD CONSTRAINT fk_user_rol
FOREIGN KEY(codrol) REFERENCES rol(codrol)
ON DELETE RESTRICT
ON UPDATE CASCADE;