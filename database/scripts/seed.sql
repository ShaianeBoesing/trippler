SET FOREIGN_KEY_CHECKS=0;

TRUNCATE TABLE Ponto_Turistico;
TRUNCATE TABLE Parada;
TRUNCATE TABLE Review;
TRUNCATE TABLE Usuario;
TRUNCATE TABLE Viagem;
TRUNCATE TABLE Categoria;
TRUNCATE TABLE Item;
TRUNCATE TABLE Viagem_Item;
TRUNCATE TABLE Midia;
TRUNCATE TABLE Amizade;

SET FOREIGN_KEY_CHECKS=1;

INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Shaiane Borges', 'shaiboesing', 'shaianeboesingrb@gmail.com', 'Florianópolis', '54992379676', '2002-09-12');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Maurício Salvador', 'mauriciools', 'msalvador03@gmail.com', 'Florianópolis', '48991990027', '2001-02-27');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Maria Silva', 'mariasilva', 'maria.silva@gmail.com', 'São Paulo', '11987654321', '1990-05-15');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('João Santos', 'jsantos', 'joao.santos@gmail.com', 'Rio de Janeiro', '21987654321', '1988-11-02');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Ana Oliveira', 'anaoliveira', 'ana.oliveira@gmail.com', 'Belo Horizonte', '31987654321', '1995-07-22');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Pedro Souza', 'psouza', 'pedro.souza@gmail.com', 'Porto Alegre', '51987654321', '1993-03-10');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Laura Pereira', 'laurapereira', 'laura.pereira@gmail.com', 'Curitiba', '41987654321', '1991-09-28');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Carlos Santos', 'carlossantos', 'carlos.santos@gmail.com', 'Santos', '11912345678', '1987-06-20');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Juliana Lima', 'julianalima', 'juliana.lima@gmail.com', 'Manaus', '21912345678', '1992-02-10');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Fernando Almeida', 'fernandoalmeida', 'fernando.almeida@gmail.com', 'Araranguá', '31912345678', '1998-12-05');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Mariana Costa', 'marianacosta', 'mariana.costa@gmail.com', 'Criciúma', '51912345678', '1994-09-17');
INSERT INTO Usuario (nome, username, email, endereco, telefone, data_nasc) VALUES ('Rafaela Ferreira', 'rafaelaferreira', 'rafaela.ferreira@gmail.com', 'Vitória', '41912345678', '1996-03-28');

INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-08-12', '2022-08-16', 'Paris', 'França', 'Viagem de verão à Paris com os amigos!!! :D', 'Paris-2022', 4);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2017-07-20', '2017-07-25', 'Londres', 'Reino Unido', 'Explorando os principais pontos turísticos de Londres!', 'Londres on summertime', 8);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-06-10', '2022-06-20', 'Nova York', 'Estados Unidos', 'Viagem de compras e turismo em Nova York.', 'NYC Trip', 3);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2023-01-05', '2023-01-10', 'Roma', 'Itália', 'Descobrindo a história antiga e a cultura italiana em Roma.', 'Roma-2023', 5);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2020-08-01', '2020-08-10', 'Tóquio', 'Japão', 'Imersão na cultura japonesa em Tóquio, incluindo visitas a templos e experimentando a culinária local.', 'Tóquio Adventure', 10);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2014-11-15', '2014-11-20', 'Sydney', 'Austrália', 'Explorando as belas praias e a vida urbana de Sydney.', 'Sydney Getaway', 7);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-10-03', '2022-10-10', 'Cidade do Cabo', 'África do Sul', 'Aventura na Cidade do Cabo: safáris, montanhas e praias incríveis.', 'Cabo Adventure', 6);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2023-04-20', '2023-04-30', 'Bangkok', 'Tailândia', 'Viagem exótica a Bangkok para experimentar a cultura tailandesa e visitar templos famosos.', 'Bangkok Experiences', 2);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2021-08-22', '2021-08-30', 'Barcelona', 'Espanha', 'Descobrindo a arquitetura deslumbrante e a vida noturna animada de Barcelona.', 'Barcelona Experience', 9);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2021-07-05', '2021-07-15', 'Cancún', 'México', 'Relaxando nas praias paradisíacas de Cancún e explorando as maravilhas naturais da região.', 'Cancún Vacation', 1);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2015-09-25', '2015-09-30', 'Berlim', 'Alemanha', 'Imersão na história e na cultura vibrante de Berlim.', 'Berlim-DEU', 11);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-05-10', '2022-05-15', 'Amsterdã', 'Holanda', 'Explorando os canais e a cultura vibrante de Amsterdã.', 'Vibing in Amsterdã', 4);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2020-06-25', '2020-07-02', 'Bali', 'Indonésia', 'Retiro relaxante em Bali, desfrutando das praias e da natureza exuberante.', 'Bali Retreat', 9);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-09-15', '2022-09-20', 'Praga', 'República Tcheca', 'Explorando a arquitetura medieval e a rica história de Praga.', 'História de Praga', 7);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2018-07-10', '2018-07-17', 'Machu Picchu', 'Peru', 'Trekking até Machu Picchu, uma das maravilhas do mundo.', 'Machu Picchu Expedition', 5);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2019-11-05', '2019-11-12', 'Viena', 'Áustria', 'Explorando a música clássica e a elegância de Viena.', 'Viagem a Viena', 2);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2022-12-15', '2022-12-25', 'Dubai', 'Emirados Árabes Unidos', 'Experiência luxuosa em Dubai, conhecendo arranha-céus impressionantes e desertos deslumbrantes.', 'Dubai Luxe', 11);
INSERT INTO Viagem (data_inicio, data_fim, cidade, pais, descricao, nome, id_usuario) VALUES ('2023-03-02', '2023-03-16', 'Fernando de Noronha', 'Brasil', 'As maravilhosas praias de Fernando de Noronha.', 'Ilha paradisíaca...', 12);

INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2023-04-02', 1, 2);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2022-04-02', 1, 8);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2021-03-15', 3, 4);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2023-02-28', 5, 6);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2023-04-10', 7, 8);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2022-03-05', 9, 10);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2021-04-20', 11, 12);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2022-04-20', 11, 3);
INSERT INTO Amizade (data_inicio_amizade, id_usuario_1, id_usuario_2) VALUES ('2022-02-28', 5, 7);

INSERT INTO Item (nome) VALUES ('Protetor solar');
INSERT INTO Item (nome) VALUES ('Mochila');
INSERT INTO Item (nome) VALUES ('Câmera fotográfica');
INSERT INTO Item (nome) VALUES ('Óculos de sol');
INSERT INTO Item (nome) VALUES ('Passaporte');
INSERT INTO Item (nome) VALUES ('Carregador portátil');
INSERT INTO Item (nome) VALUES ('Chapéu');
INSERT INTO Item (nome) VALUES ('Roupa de banho');
INSERT INTO Item (nome) VALUES ('Repelente');
INSERT INTO Item (nome) VALUES ('Mapa da cidade');
INSERT INTO Item (nome) VALUES ('Livro');
INSERT INTO Item (nome) VALUES ('Agenda de viagem');
INSERT INTO Item (nome) VALUES ('Kit de primeiros socorros');
INSERT INTO Item (nome) VALUES ('Garrafa de água');
INSERT INTO Item (nome) VALUES ('Guarda-chuva');
INSERT INTO Item (nome) VALUES ('Adaptador de tomada');
INSERT INTO Item (nome) VALUES ('Lanterna');
INSERT INTO Item (nome) VALUES ('Fones de ouvido');
INSERT INTO Item (nome) VALUES ('Travesseiro de viagem');
INSERT INTO Item (nome) VALUES ('Kit de higiene pessoal');
INSERT INTO Item (nome) VALUES ('Dinheiro em espécie');

INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (10, 1, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (12, 3, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (8, 5, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (16, 10, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (4, 18, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (14, 7, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (6, 11, 3);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (9, 4, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (15, 9, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (5, 12, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (17, 5, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (11, 16, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (7, 19, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (13, 14, 3);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (3, 13, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (10, 6, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (2, 15, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (1, 8, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (4, 17, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (6, 20, 500);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (9, 1, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (13, 4, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (9, 6, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (17, 11, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (14, 19, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (14, 17, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (6, 7, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (1, 3, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (15, 8, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (5, 1, 3);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (17, 12, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (11, 13, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (7, 20, 100);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (13, 2, 3);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (3, 15, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (10, 9, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (2, 10, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (1, 18, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (4, 16, 1);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (6, 2, 2);
INSERT INTO Viagem_Item (id_viagem, id_item, quantidade) VALUES (9, 14, 1);

INSERT INTO Categoria (nome, descricao) VALUES ('Museus', 'Itens históricos e contemporâneos para visualização');
INSERT INTO Categoria (nome, descricao) VALUES ('Praias', 'Lindas praias para relaxar e desfrutar do sol e do mar');
INSERT INTO Categoria (nome, descricao) VALUES ('Montanhas', 'Cenários naturais deslumbrantes e trilhas para caminhadas');
INSERT INTO Categoria (nome, descricao) VALUES ('Parques', 'Áreas preservadas com flora e fauna únicas');
INSERT INTO Categoria (nome, descricao) VALUES ('Monumentos Históricos', 'Marcos históricos e arquitetônicos importantes');
INSERT INTO Categoria (nome, descricao) VALUES ('Gastronomia', 'Restaurantes e comidas típicas para degustar');
INSERT INTO Categoria (nome, descricao) VALUES ('Arte e Cultura', 'Eventos culturais, galerias de arte e teatros');
INSERT INTO Categoria (nome, descricao) VALUES ('Jardins Botânicos', 'Jardins com uma variedade de plantas e flores');
INSERT INTO Categoria (nome, descricao) VALUES ('Zoológicos', 'Observação de animais e conservação da vida selvagem');
INSERT INTO Categoria (nome, descricao) VALUES ('Cavernas', 'Exploração de formações rochosas e cavernas subterrâneas');
INSERT INTO Categoria (nome, descricao) VALUES ('Pontes', 'Estruturas icônicas de ligação entre locais');
INSERT INTO Categoria (nome, descricao) VALUES ('Castelos', 'Residências antigas e fortalezas impressionantes');
INSERT INTO Categoria (nome, descricao) VALUES ('Mercados Locais', 'Feiras e mercados com produtos tradicionais');
INSERT INTO Categoria (nome, descricao) VALUES ('Observatórios ou Pontos de Observação', 'Pontos de observação para estrelas ou cidade');
INSERT INTO Categoria (nome, descricao) VALUES ('Teatros e Espetáculos', 'Shows ao vivo, peças de teatro e performances');
INSERT INTO Categoria (nome, descricao) VALUES ('Área de compras e Entretenimento', 'Lugares famosos que oferecem entretenimento no geral');

INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu do Louvre', 'Rue de Rivoli, 75001 Paris, França', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Torre Eiffel', 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, França', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Catedral de Notre-Dame de Paris', '6 Parvis Notre-Dame, Pl. Jean-Paul II, 75004 Paris, França', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardim de Luxemburgo', 'Rue de Médicis, 75006 Paris, França', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Arco do Triunfo', 'Place Charles de Gaulle, 75008 Paris, França', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ópera Garnier', 'Place de lOpéra, 75009 Paris, França', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Palácio de Buckingham', 'Westminster, Londres SW1A 1AA, Reino Unido', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Torre de Londres', 'St Katharines & Wapping, Londres EC3N 4AB, Reino Unido', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('British Museum', 'Great Russell St, Bloomsbury, Londres WC1B 3DG, Reino Unido', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Tower Bridge', 'Tower Bridge Rd, Londres SE1 2UP, Reino Unido', 11);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Covent Garden', 'Covent Garden, Londres WC2E 8RF, Reino Unido', 13);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu de História Natural', 'Cromwell Rd, Kensington, Londres SW7 5BD, Reino Unido', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Estátua da Liberdade', 'Liberty Island, Nova York, NY 10004, EUA', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Times Square', 'Manhattan, Nova York, NY 10036, EUA', 16);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Central Park', 'Central Park, Nova York, NY 10022, EUA', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Broadway', 'Times Square, Manhattan, Nova York, EUA', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Brooklyn Bridge', 'Nova York, NY 10038, EUA', 11);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('High Line', 'Manhattan, Nova York, EUA', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Empire State Building', '350 5th Ave, Nova York, NY 10118, EUA', 14);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Coliseu', 'Piazza del Colosseo, 1, 00184 Roma RM, Itália', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Vaticano', 'Viale Vaticano, 00165 Roma RM, Itália', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Fonte de Trevi', 'Piazza di Trevi, 00187 Roma RM, Itália', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Pantheon', 'Piazza della Rotonda, 00186 Roma RM, Itália', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Escadaria de Espanha', 'Piazza di Spagna, 00187 Roma RM, Itália', 7);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Torre de Tóquio', '4 Chome-2-8 Shibakoen, Minato City, Tóquio 105-0011, Japão', 14);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ginza', 'Ginza, Chuo City, Tóquio, Japão', 16);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Palácio Imperial de Tóquio', '1-1 Chiyoda, Chiyoda City, Tóquio 100-8111, Japão', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Parque Ueno', 'Uenokoen, Taito City, Tóquio 110-0007, Japão', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Tsukiji Fish Market', '5 Chome-2-1 Tsukiji, Chuo City, Tóquio 104-0045, Japão', 13);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ópera de Sydney', 'Bennelong Point, Sydney NSW 2000, Austrália', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ponte da Baía de Sydney', 'Sydney Harbour Bridge, Sydney NSW 2000, Austrália', 11);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Praia de Bondi', 'Bondi Beach, Bondi NSW 2026, Austrália', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardim Botânico Real', 'Mrs Macquaries Rd, Sydney NSW 2000, Austrália', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Taronga Zoo', 'Bradleys Head Rd, Mosman NSW 2088, Austrália', 9);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Praia de Manly', 'Manly Beach, Manly NSW 2095, Austrália', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Table Mountain', 'Tafelberg Rd, Cidade do Cabo, África do Sul', 3);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ilha Robben', 'Cidade do Cabo, África do Sul', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardim Botânico Kirstenbosch', 'Rhodes Dr, Newlands, Cidade do Cabo, África do Sul', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Boulders Beach', 'Kleintuin Rd, Simons Town, Cidade do Cabo, África do Sul', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Castle of Good Hope', 'Darling St & Buitenkant St, Cidade do Cabo, África do Sul', 12);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Companys Gardens', '19 Queen Victoria St, Cidade do Cabo, África do Sul', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Grande Palácio Real', 'Na Phra Lan Rd, Phra Nakhon, Bangkok, Tailândia', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Khao San Road', 'Khao San Road, Talat Yot, Phra Nakhon, Bangkok, Tailândia', 16);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Mercado Flutuante de Damnoen Saduak', 'Damnoen Saduak District, Ratchaburi, Bangkok, Tailândia', 7);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Templo do Amanhecer', 'Ban Bat, Pom Prap Sattru Phai, Bangkok, Tailândia', 14);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Sagrada Família', 'Carrer de Mallorca, 401, 08013 Barcelona, Espanha', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Parque Güell', 'Carrer dOlot, s/n, 08024 Barcelona, Espanha', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Parque Montjuïc', 'Avinguda del Castell, s/n, 08038 Barcelona, Espanha', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Mercado de La Boqueria', 'La Rambla, 91, 08001 Barcelona, Espanha', 6);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Casa Batlló', 'Passeig de Gràcia, 43, 08007 Barcelona, Espanha', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Zona Hotelera', 'Cancún, Quintana Roo, México', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Coco Bongo Cancún', 'Zona Hotelera, Cancún, Quintana Roo, México', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Isla Mujeres', 'A 8 km da costa de Cancún, Quintana Roo, México', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Parque Xcaret', 'Solidaridad, Quintana Roo, México', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Parque Nacional Tulum', 'Tulum, Quintana Roo, México', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Portão de Brandemburgo', 'Pariser Platz, 10117 Berlim, Alemanha', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Muro de Berlim', 'Ao longo da cidade', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu da Ilha dos Museus', 'Bodestraße 1-3, 10178 Berlim, Alemanha', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('East Side Gallery', 'Mühlenstraße, 10243 Berlim, Alemanha', 7);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Palácio de Charlottenburg', 'Spandauer Damm 10-22, 14059 Berlim, Alemanha', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardim Zoológico de Berlim', 'Hardenbergplatz 8, 10787 Berlim, Alemanha', 9);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu Van Gogh', 'Museumplein 6, 1071 DJ Amsterdã, Países Baixos', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Casa de Anne Frank', 'Prinsengracht 263-267, 1016 GV Amsterdã, Países Baixos', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Rijksmuseum', 'Museumstraat 1, 1071 XX Amsterdã, Países Baixos', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Vondelpark', '1071 AA Amsterdã, Países Baixos', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ilha Nusa Penida', 'Sudeste de Bali, Indonésia', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Arte e Cultura de Ubud', 'Ubud, Gianyar Regency, Bali, Indonésia', 7);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Templo de Besakih', 'Desa Besakih, Rendang, Karangasem Regency, Bali, Indonésia', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ponte Carlos', 'Praha 1, Staré Mesto, República Tcheca', 11);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Castelo de Praga', 'Praha 1, Hradcany, República Tcheca', 12);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Teatro Nacional', 'Praha 1, Nové Mesto, República Tcheca', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardins de Wallenstein', 'Praha 1, Malá Strana, República Tcheca', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Bairro Judeu', 'Praha 1, Staré Mesto, República Tcheca', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Cidade Perdida de Machu Picchu', 'Cusco, Peru', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Huayna Picchu', 'Cusco, Peru', 3);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ponte Inca', 'Cusco, Peru', 11);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Burj Khalifa', 'Downtown Dubai, Dubai, Emirados Árabes Unidos', 14);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Palm Jumeirah', 'Dubai, Emirados Árabes Unidos', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Dubai Mall', 'Downtown Dubai, Dubai, Emirados Árabes Unidos', 16);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Souk Madinat Jumeirah', 'Al Sufouh Road, Dubai, Emirados Árabes Unidos', 6);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Dubai Museum', 'Al Fahidi Fort, Bur Dubai, Dubai, Emirados Árabes Unidos', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Palácio de Schönbrunn', 'Viena, Áustria', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Ópera Estatal de Viena', 'Viena, Áustria', 15);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Stadtpark', 'Viena, Áustria', 4);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu de História da Arte', 'Viena, Áustria', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu de História Natural de Viena', 'Viena, Áustria', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Belvedere Palace', 'Viena, Áustria', 1);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Praia do Sancho', 'Ilha de Fernando de Noronha, Brasil', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Baía dos Porcos', 'Ilha de Fernando de Noronha, Brasil', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Praia da Cacimba do Padre', 'Ilha de Fernando de Noronha, Brasil', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Morro Dois Irmãos', 'Ilha de Fernando de Noronha, Brasil', 3);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Cristo Redentor', 'Parque Nacional da Tijuca, Rio de Janeiro, Brasil', 5);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Pão de Açúcar', 'Urca, Rio de Janeiro, Brasil', 3);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Copacabana', 'Zona Sul, Rio de Janeiro, Brasil', 2);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Jardim Botânico', 'Rio de Janeiro, Brasil', 8);
INSERT INTO Ponto_Turistico (nome, localizacao, id_categoria) VALUES ('Museu do Amanhã', 'Praça Mauá, Rio de Janeiro, Brasil', 1);

INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (1, 1, 13, 4.8);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (1, 2, 25, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (1, 4, 0, 3.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (2, 7, 20, 4);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (2, 10, 0, 3.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (2, 11, 0, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (2, 12, 15, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (3, 14, 105, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (3, 15, 0, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (3, 16, 40, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (3, 17, 0, 4.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (4, 20, 30, 2.8);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (4, 21, 10, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (4, 22, 0, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (4, 23, 10, 3.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (5, 25, 50, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (5, 26, 75, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (5, 29, 60, 3.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (6, 32, 20, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (6, 33, 35, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (6, 34, 25, 4.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 36, 0, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 37, 55, 3.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 38, 20, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 39, 35, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 40, 60, 4.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (7, 41, 0, 3.4);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (8, 42, 10, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (8, 43, 45, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (9, 46, 30, 3.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (9, 47, 10, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (9, 48, 20, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (9, 49, 70, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (10, 52, 75, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (10, 53, 20, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (10, 54, 35, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (11, 56, 0, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (11, 57, 0, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (11, 58, 80, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (11, 59, 0, 4.9);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (12, 62, 10, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (12, 63, 15, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (12, 64, 20, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (13, 66, 100, 4.3);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (14, 69, 0, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (14, 70, 10, 4.2);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (14, 71, 0, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (14, 73, 0, 4.6);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (15, 74, 200, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (15, 76, 40, 3.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (16, 77, 120, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (16, 78, 500, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (16, 79, 88, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (17, 82, 20, 4.5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (17, 83, 50, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (17, 84, 0, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (17, 87, 30, 4.8);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (18, 88, 300, 5);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (18, 89, 150, 3.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (18, 90, 500, 4.7);
INSERT INTO Parada (id_viagem, id_ponto, custo, nota) VALUES (18, 91, 475, 4.9);

INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.8, 'Adorei os pontos turísticos visitados e o valor gasto foi ótimo!', 1, 4);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (3.5, 'Achei os locais interessantes, mas o custo foi um pouco alto.', 2, 6);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (5.0, 'Viagem incrível! Os pontos turísticos superaram minhas expectativas.', 3, 2);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.2, 'Os lugares visitados foram bonitos, mas o custo poderia ser melhor.', 4, 9);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.5, 'Ótima experiência, recomendo visitar esses lugares.', 5, 1);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.0, 'Gostei dos pontos turísticos, mas acho que poderia ter gastado menos.', 6, 11);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.7, 'Uma viagem inesquecível, vale cada centavo!', 7, 8);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (3.8, 'Os locais visitados foram interessantes, mas o preço não compensou.', 8, 3);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.9, 'Experiência incrível, superou minhas expectativas.', 9, 7);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.3, 'Os pontos turísticos são maravilhosos, mas achei um pouco caro.', 10, 5);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.5, 'Amei conhecer os pontos turísticos dessa viagem!', 11, 10);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (3.2, 'Algumas atrações foram decepcionantes, mas outras compensaram.', 12, 4);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.8, 'Uma viagem incrível com ótimos lugares para visitar.', 13, 6);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.0, 'Custo-benefício equilibrado, vale a pena!', 14, 9);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.6, 'Me parece uma experiência única, vou seguir esse roteiro!', 15, 3);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (3.7, 'Alguns pontos turísticos poderiam ser melhor aproveitados.', 16, 8);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.9, 'Melhor viagem que já vi! Superou todas as expectativas.', 17, 2);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.3, 'Ótima combinação de locais para visitar, gostei bastante.', 18, 7);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.7, 'Recomendo essa viagem para todos os amantes de aventura!', 11, 1);
INSERT INTO Review (nota, descricao, id_viagem, id_usuario) VALUES (4.2, 'Bom custo-benefício, aproveitei bastante.', 4, 5);
