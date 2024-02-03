-- Database: cleanResidence

-- DROP DATABASE IF EXISTS "cleanResidence";

CREATE DATABASE "cleanResidence"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
-- Table: public.company

-- DROP TABLE IF EXISTS public.company;

CREATE TABLE IF NOT EXISTS public.company
(
    id integer NOT NULL DEFAULT nextval('company_id_seq'::regclass),
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(20) COLLATE pg_catalog."default" NOT NULL,
    latitude character varying(40) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_id_company PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.company
    OWNER to postgres;

-- Table: public.client

-- DROP TABLE IF EXISTS public.client;

CREATE TABLE IF NOT EXISTS public.client
(
    id integer NOT NULL DEFAULT nextval('client_id_seq'::regclass),
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(20) COLLATE pg_catalog."default" NOT NULL,
    latitude character varying(40) COLLATE pg_catalog."default" NOT NULL,
    longitude character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_id_client PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.client
    OWNER to postgres;

-- SEQUENCE: public.client_id_seq

-- DROP SEQUENCE IF EXISTS public.client_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.client_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY client.id;

ALTER SEQUENCE public.client_id_seq
    OWNER TO postgres;

-- SEQUENCE: public.company_id_seq

-- DROP SEQUENCE IF EXISTS public.company_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.company_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY company.id;

ALTER SEQUENCE public.company_id_seq
    OWNER TO postgres;

INSERT INTO public.client(
	id, name, email, phone, latitude, longitude)
	VALUES (1,Flazioney O,flazioney@hotmail.com,65992718228,-15.579411,-54.328307);
	
INSERT INTO public.client(
	id, name, email, phone, latitude, longitude)
	VALUES (2,Daisdjiajs,ofmsof@hotmail.com,1231234322,-15.585244960878338,-54.27340707357922);
	
INSERT INTO public.client(
	id, name, email, phone, latitude, longitude)
	VALUES (3,Flazioney O,flazioney@hotmail.com,65999231344,-15.5570854,-54.2974513
);

INSERT INTO public.company(
	id, name, email, phone, latitude, longitude)
	VALUES (1,Clean Residence,clean@residence.com,65992718228,-15.585244960878338,-54.27340707357922
);