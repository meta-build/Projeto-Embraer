## Comando para criaçaõ de banco de dados local

### Criação da tabela aeronave
```
create table aeronave (
 id int auto_increment primary key,
 nome varchar (100),
 marca varchar(50)
);
```

### Criação da tabela motor
```
create table motor(
 id int auto_increment primary key,
 nome varchar(100),
 aeronave int,
 foreign key (aeronave) references aeronave(id) on delete cascade
 );
```

### Criação da tabela certificação
```
 create table certificacao (
 id int auto_increment primary key,
 nome varchar(100),
 aeronave int,
 foreign key (aeronave) references aeronave(id) on delete cascade
 );
```

### Criação da tabela flap
```
create table flap (
 id int auto_increment primary key,
 nome varchar(100),
 aeronave int,
 foreign key (aeronave) references aeronave(id) on delete cascade
 );
```

### Criação da tabela de config de freio
```
 create table breakconfig (
 id int auto_increment primary key,
 nome varchar(100),
 aeronave int,
 foreign key (aeronave) references aeronave(id) on delete cascade
 );
```