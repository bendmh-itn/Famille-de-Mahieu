{/*

var filteredData = [];

const data =
[
	{
		"creationDate" : "21-12-20",
		"generation" : 1,
		"famillyName" : "de Mahieu - Dessain",
		"lastName" : "de Mahieu",
		"firstName" : "Marie-Antoinette",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fbonne%20maman.jpg?alt=media&token=3ff3d2c2-6989-40b7-8aea-95a91a28e630",
		"birthDateText" : "27/05/1924",
		"deathDateText" : "08/12/2020",
		"MyNumber" : 0
    },
	{
		"creationDate" : "21-12-20",
		"generation" : 1,
		"famillyName" : "de Mahieu - Dessain",
		"lastName" : "de Mahieu",
		"firstName" : "Louis",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201221_092903.jpg?alt=media&token=cad40848-b928-4ef5-8dcb-269b0c12e1f4",
		"birthDateText" : "01/07/1926",
		"deathDateText" : "01/07/2015",
		"MyNumber" : 0
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : " van Delft  de Mahieu ",
		"lastName" : "de Mahieu",
		"firstName" : "Sabine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSabine.jpg?alt=media&token=4d1156a2-1b2e-46a2-b547-fccd115b2b4d",
		"birthDateText" : "07/03/1956",
		"deathDateText" : "",
		"MyNumber" : 2
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : "Rolin - de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Vinciane",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201227-135024.jpg?alt=media&token=d5535cab-ade5-4b3f-a380-e2ce7e7011fa",
		"birthDateText" : "19/03/1957",
		"deathDateText" : "",
		"MyNumber" : 3
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu - Vandermeersch",
		"lastName" : "de Mahieu",
		"firstName" : "Miguel",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F03FF113D-BFB5-4AAA-BD93-1487B07879D6.jpeg?alt=media&token=20e44670-8291-459c-9a62-7507c7ce9f15",
		"birthDateText" : "14/07/1960",
		"deathDateText" : "",
		"MyNumber" : 6
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Mahieu ",
		"firstName" : "Patrick",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201221_154411.jpg?alt=media&token=f0f4c5f8-1c1b-4c63-bcfe-176718134250",
		"birthDateText" : "15/07/1960",
		"deathDateText" : "",
		"MyNumber" : 7
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval",
		"firstName" : "Gauthier",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201227_172323.jpg?alt=media&token=7df82f87-b6de-4a9f-a969-aeb157072905",
		"birthDateText" : "15/07/1983",
		"deathDateText" : "",
		"MyNumber" : 11
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "de Fauconval",
		"firstName" : "Géraldine ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FEDE5BD62-550F-4DBB-8B98-572F4B6B2980.jpeg?alt=media&token=a3d109cd-34a0-418d-8bb0-c5abaabe227a",
		"birthDateText" : "15/07/1985",
		"deathDateText" : "",
		"MyNumber" : 12
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "de Fauconval",
		"firstName" : "Stéphanie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FSteph.jpg?alt=media&token=f359c09d-b29c-4c92-8a34-649870cce1bc",
		"birthDateText" : "09/05/1987",
		"deathDateText" : "",
		"MyNumber" : 13
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 2,
		"famillyName" : " van Delft  de Mahieu ",
		"lastName" : "van DELFT",
		"firstName" : "Baudouin",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fc021616d-9fd3-486c-8f73-72fd11cef5ff.JPG?alt=media&token=b2ec24ed-ec0a-4738-b6e1-5c83b51e4e1b",
		"birthDateText" : "12/03/1956",
		"deathDateText" : "",
		"MyNumber" : 20
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "van Delft",
		"lastName" : "van DELFT",
		"firstName" : "Matthieu",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_4133.JPG?alt=media&token=9aec796b-5783-4a17-a6a0-774f6a399f04",
		"birthDateText" : "17/12/1984",
		"deathDateText" : "",
		"MyNumber" : 21
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "BOUDOUL - van DELFT",
		"lastName" : "van Delft Boudoul",
		"firstName" : "Magali",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F7D93E3CA-C535-4494-8666-7BE5B1FF5EA6.jpeg?alt=media&token=3d4a485c-2523-427e-b8b8-479a2c67df86",
		"birthDateText" : "25/05/1987",
		"deathDateText" : "",
		"MyNumber" : 22
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 2,
		"famillyName" : "Rolin - de Mahieu",
		"lastName" : "ROLIN",
		"firstName" : "Guy",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201221-151037.jpg?alt=media&token=a7f1603b-255e-4168-8754-e4afecf5ebca",
		"birthDateText" : "07/11/1956",
		"deathDateText" : "",
		"MyNumber" : 30
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Xavier",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201221_141709.jpg?alt=media&token=8e8a9c14-9f26-46d7-9085-33b791b980a6",
		"birthDateText" : "16/11/1980",
		"deathDateText" : "",
		"MyNumber" : 31
	},
	{
		"creationDate" : "31-12-20",
		"generation" : 3,
		"famillyName" : "Rolin",
		"lastName" : "ROLIN",
		"firstName" : "Nicolas",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FNicolasROLIN.JPG?alt=media&token=d426b2b4-fad3-4e97-9711-76b3e517f8b2",
		"birthDateText" : "29/10/1982",
		"deathDateText" : "",
		"MyNumber" : 32
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Okako",
		"lastName" : "Rolin",
		"firstName" : "Christophe",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20201227-WA0006.jpg?alt=media&token=ab944e2a-5622-425b-9e30-c4c8e385e446",
		"birthDateText" : "18/07/1985",
		"deathDateText" : "",
		"MyNumber" : 33
	},
	{
		"creationDate" : "10-01-21",
		"generation" : 3,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Rolin",
		"firstName" : "Sébastien ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210110_172457.jpg?alt=media&token=be1849fd-9ccf-4776-b591-1e36b761819f",
		"birthDateText" : "21/03/1987",
		"deathDateText" : "",
		"MyNumber" : 34
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Darius",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F2E2BDCD3-9EFC-40EC-80E8-1AB4C490B6F5.jpeg?alt=media&token=90b44c48-e615-41c0-875c-8e6763c82b4e",
		"birthDateText" : "24/01/1994",
		"deathDateText" : "",
		"MyNumber" : 41
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Alaric",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FPicture.png?alt=media&token=ec6f0847-f21a-46f1-a616-2b6ce247e6f9",
		"birthDateText" : "01/07/1996",
		"deathDateText" : "",
		"MyNumber" : 42
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu - Vandermeersch",
		"lastName" : "de Mahieu - Vandermeersch ",
		"firstName" : "Brigitte ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FFCC71762-3409-4EEB-A852-8709B9DB8A5C.jpeg?alt=media&token=d535d8ef-8390-4630-806c-acb86102cd47",
		"birthDateText" : "31/12/1965",
		"deathDateText" : "",
		"MyNumber" : 60
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 3,
		"famillyName" : "de Troyer",
		"lastName" : "de Mahieu",
		"firstName" : "Charlotte",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181850_Photos.jpg?alt=media&token=fa6104d8-9b1c-47d8-867e-851336d2bbcb",
		"birthDateText" : "30/06/1989",
		"deathDateText" : "",
		"MyNumber" : 61
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 3,
		"famillyName" : "Desmet - de Mahieu",
		"lastName" : "Desmet",
		"firstName" : "Caroline",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F9C200F9F-6147-40C9-BFE9-9F4923BF8AA9.jpeg?alt=media&token=a204738e-7bf3-45df-a293-82465202f108",
		"birthDateText" : "26/11/1990",
		"deathDateText" : "",
		"MyNumber" : 62
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu",
		"lastName" : "De Mahieu",
		"firstName" : "Isabelle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20201221-WA0002.jpg?alt=media&token=61869891-3023-48f9-b33f-abdfd9e12e87",
		"birthDateText" : "07/10/1993",
		"deathDateText" : "",
		"MyNumber" : 63
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 3,
		"famillyName" : "del Marmol - de Mahieu",
		"lastName" : "de Mahieu",
		"firstName" : "Valentine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fphoto%20Valentine%20Dm.png?alt=media&token=d18b1c70-6a95-4d5d-8dc9-3b138650a4df",
		"birthDateText" : "27/04/1995",
		"deathDateText" : "",
		"MyNumber" : 64
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 2,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Vinck",
		"firstName" : "Anne",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fanne%20de%20vinck.jpg?alt=media&token=39f99980-f292-463f-9907-03228d58d180",
		"birthDateText" : "28/05/1962",
		"deathDateText" : "",
		"MyNumber" : 70
	},
	{
		"creationDate" : "22-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - Doat",
		"lastName" : "De Mahieu",
		"firstName" : "Jean Baptiste ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201209_212137.jpg?alt=media&token=bfbbcc0c-4657-4637-8123-deca5199b465",
		"birthDateText" : "11/08/1986",
		"deathDateText" : "",
		"MyNumber" : 71
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu-Tock",
		"lastName" : "de Mahieu",
		"firstName" : "Pierre",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201103_113100.jpg?alt=media&token=9d15aa9b-88c5-47a3-893c-1b434ccc3676",
		"birthDateText" : "07/03/1988",
		"deathDateText" : "",
		"MyNumber" : 72
	},
	{
		"creationDate" : "30-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - Aerts",
		"lastName" : "de Mahieu",
		"firstName" : "Anne-Sophie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Freceived_128401348591378.jpeg?alt=media&token=4a41e527-8490-4345-b5d3-7330ac6841c5",
		"birthDateText" : "08/01/1990",
		"deathDateText" : "",
		"MyNumber" : 73
	},
	{
		"creationDate" : "20-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - D'herde",
		"lastName" : "de Mahieu",
		"firstName" : "Benoit",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FBenoit%20de%20Mahieu.jpg?alt=media&token=41ae6741-2b05-4168-bfe7-162d053215f2",
		"birthDateText" : "15/10/1991",
		"deathDateText" : "",
		"MyNumber" : 74
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - henry de frahan",
		"lastName" : "De Mahieu",
		"firstName" : "Francois",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FFB_IMG_1608557548047.jpg?alt=media&token=a27eae8c-e2df-4d0e-8ae9-f002ca6e41c5",
		"birthDateText" : "20/03/1994",
		"deathDateText" : "",
		"MyNumber" : 75
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Mahieu",
		"firstName" : "Marie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_6358.jpg?alt=media&token=f5c15910-7226-4488-9985-282ab74d3833",
		"birthDateText" : "13/10/1996",
		"deathDateText" : "",
		"MyNumber" : 76
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Mahieu ",
		"firstName" : "Claire ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F74310294_1163831300481112_2176718837548843008_n.jpg?alt=media&token=d968a2a4-678b-41e3-aa73-c47ed21911a5",
		"birthDateText" : "17/05/2000",
		"deathDateText" : "",
		"MyNumber" : 77
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu-de Vinck",
		"lastName" : "de Mahieu",
		"firstName" : "Martin",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Freceived_927361157642415.jpeg?alt=media&token=6bf325a3-d5d0-4552-ace3-dbb377f99afd",
		"birthDateText" : "17/05/2000",
		"deathDateText" : "",
		"MyNumber" : 78
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "Leblicq ",
		"firstName" : "Aurore ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FDD2002A0-4481-4984-9BDF-5521142CD5C7.jpeg?alt=media&token=49dc9d9e-cc20-4705-ba42-1431db13e3de",
		"birthDateText" : "06/06/1984",
		"deathDateText" : "",
		"MyNumber" : 110
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval ",
		"firstName" : "Gaspard ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F91AFD7CE-6C98-4115-B1E7-833B0A9384AE.jpeg?alt=media&token=c6220178-0bfe-4ac3-8de8-37658768e30e",
		"birthDateText" : "02/08/2014",
		"deathDateText" : "",
		"MyNumber" : 111
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval",
		"firstName" : "Achille ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201227_172043.jpg?alt=media&token=e488856f-0216-4844-b435-043e6dd9bd07",
		"birthDateText" : "09/03/2016",
		"deathDateText" : "",
		"MyNumber" : 112
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval-Leblicq ",
		"lastName" : "de Fauconval ",
		"firstName" : "Rose ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F1B8C7F20-49AB-4173-89F3-F8545D3A241F.jpeg?alt=media&token=b8aa0184-a30c-4f32-82a0-186baeaf70c5",
		"birthDateText" : "18/05/2018",
		"deathDateText" : "",
		"MyNumber" : 113
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Julien ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FB0E213CF-6C5A-4206-8B9B-7C031A36C168.png?alt=media&token=0e28aa13-2edc-4214-92b3-63ecb93d1f9c",
		"birthDateText" : "11/09/1982",
		"deathDateText" : "",
		"MyNumber" : 120
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Maxime ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FF8CD304A-CB4E-4FC6-900C-C9A09DB2BECC.jpeg?alt=media&token=9a970976-7044-4443-b415-8823679c662a",
		"birthDateText" : "09/11/2011",
		"deathDateText" : "",
		"MyNumber" : 121
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "Blave - de Fauconval ",
		"lastName" : "Blave",
		"firstName" : "Élise ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FB11E43AB-2BBA-4325-A703-DE93AA04E652.jpeg?alt=media&token=c732cdf3-2e5f-4eb4-a2b2-2816a289f26f",
		"birthDateText" : "07/01/2020",
		"deathDateText" : "",
		"MyNumber" : 122
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 3,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "Leonardo",
		"firstName" : "Fabrizio",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FWhatsApp%20Image%202020-12-23%20at%2008.19.36.jpeg?alt=media&token=3d370d36-6700-46b5-aad6-5a2bf0522f23",
		"birthDateText" : "26/02/1988",
		"deathDateText" : "",
		"MyNumber" : 130
	},
	{
		"creationDate" : "23-12-20",
		"generation" : 4,
		"famillyName" : "de Fauconval - Leonardo",
		"lastName" : "Leonardo",
		"firstName" : "Joanna",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FWhatsApp%20Image%202020-12-23%20at%2008.14.58.jpeg?alt=media&token=18ffbd3d-01b1-4243-94ba-731e2d2a8265",
		"birthDateText" : "10/10/2014",
		"deathDateText" : "",
		"MyNumber" : 131
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "van Delft",
		"lastName" : "van DELFT",
		"firstName" : "Manon",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_4158.JPG?alt=media&token=6e3465af-ffaf-46bf-b08f-f53cc1fe5a9f",
		"birthDateText" : "03/10/1988",
		"deathDateText" : "",
		"MyNumber" : 210
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "van Delft",
		"lastName" : "van DELFT",
		"firstName" : "Martin",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2Fmartin%20van%20delft.JPG?alt=media&token=2bfc9b90-0eb6-447c-bc5c-caeb29cc99bd",
		"birthDateText" : "02/11/2019",
		"deathDateText" : "",
		"MyNumber" : 211
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "BOUDOUL - van DELFT",
		"lastName" : "Boudoul",
		"firstName" : "Fabien",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F959E1A44-28CC-4206-A048-54B043928A4E.jpeg?alt=media&token=e9394637-5697-458a-8dcf-7e2c632f5c6f",
		"birthDateText" : "08/09/1984",
		"deathDateText" : "",
		"MyNumber" : 220
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "BOUDOUL - van DELFT",
		"lastName" : "BOUDOUL ",
		"firstName" : "Antoine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F50D12CCB-DFB7-4E07-8FB5-9C34794AFD9B.jpeg?alt=media&token=6aa1f81f-43d4-4db0-a17a-eecdeef85d2c",
		"birthDateText" : "26/10/2018",
		"deathDateText" : "",
		"MyNumber" : 221
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Haverhals",
		"firstName" : "Veerle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F83606188_10156579178281898_334906186644062208_o.jpg?alt=media&token=ff710bd1-eafd-4c6c-b756-645a2c934f34",
		"birthDateText" : "26/02/1983",
		"deathDateText" : "",
		"MyNumber" : 310
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Coline",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_160939.jpg?alt=media&token=eae47c28-4316-406f-8487-0bbba2ad218d",
		"birthDateText" : "01/05/2012",
		"deathDateText" : "",
		"MyNumber" : 311
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Eliott",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_162746.jpg?alt=media&token=2410e8b3-c2ce-428b-ac6b-8368d5c2082b",
		"birthDateText" : "12/05/2013",
		"deathDateText" : "",
		"MyNumber" : 312
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Vasco",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_163348.jpg?alt=media&token=19590ce3-6e87-4009-a509-7cfcbaee477d",
		"birthDateText" : "09/01/2015",
		"deathDateText" : "",
		"MyNumber" : 313
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 4,
		"famillyName" : "Rolin - Haverhals",
		"lastName" : "Rolin",
		"firstName" : "Merlin",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201107_160710.jpg?alt=media&token=968b2877-7993-431e-ac69-41563fce437c",
		"birthDateText" : "17/02/2016",
		"deathDateText" : "",
		"MyNumber" : 314
	},
	{
		"creationDate" : "31-12-20",
		"generation" : 4,
		"famillyName" : "Rolin",
		"lastName" : "Rolin",
		"firstName" : "Zacharie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FZacharieROLIN.jpg?alt=media&token=93e55cf2-3ad9-4532-b477-5ecbddade2b8",
		"birthDateText" : "22/02/2012",
		"deathDateText" : "",
		"MyNumber" : 321
	},
	{
		"creationDate" : "31-12-20",
		"generation" : 4,
		"famillyName" : "Rolin",
		"lastName" : "Rolin",
		"firstName" : "Jimmy",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FJimmyROLIN.jpg?alt=media&token=b8f7f5ab-9df9-4805-8e14-97b4985dc160",
		"birthDateText" : "12/12/2014",
		"deathDateText" : "",
		"MyNumber" : 322
	},
	{
		"creationDate" : "27-12-20",
		"generation" : 3,
		"famillyName" : "Rolin - Okako",
		"lastName" : "Okako Ehadi",
		"firstName" : "Atticha",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201227-220110_WhatsApp.jpg?alt=media&token=37d2bb50-90cc-40da-b5f3-dedef0d2eae4",
		"birthDateText" : "24/11/1992",
		"deathDateText" : "",
		"MyNumber" : 330
	},
	{
		"creationDate" : "10-01-21",
		"generation" : 3,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Depret",
		"firstName" : "Charlotte ",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20210110_172826.jpg?alt=media&token=6723f73b-87f2-490d-9f3e-f11278cfa05d",
		"birthDateText" : "21/09/1985",
		"deathDateText" : "",
		"MyNumber" : 340
	},
	{
		"creationDate" : "10-01-21",
		"generation" : 4,
		"famillyName" : "Rolin - Depret",
		"lastName" : "Rolin",
		"firstName" : "Noelia",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20210101-WA0002.jpg?alt=media&token=3c720004-715b-4d13-a8ff-3ccb5939c121",
		"birthDateText" : "19/12/2020",
		"deathDateText" : "",
		"MyNumber" : 341
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 3,
		"famillyName" : "de Troyer",
		"lastName" : "de Troyer",
		"firstName" : "John",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181158_Photos.jpg?alt=media&token=20a5fc21-bbd8-47f7-b400-bb5a2222772e",
		"birthDateText" : "17/04/1988",
		"deathDateText" : "",
		"MyNumber" : 610
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 4,
		"famillyName" : "de Troyer",
		"lastName" : "de Troyer",
		"firstName" : "Philippine",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181548_Photos.jpg?alt=media&token=20fec856-ae44-490c-bfde-bdfcb50dadd2",
		"birthDateText" : "31/08/2015",
		"deathDateText" : "",
		"MyNumber" : 611
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 4,
		"famillyName" : "de Troyer",
		"lastName" : "de Troyer",
		"firstName" : "Isaure",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FScreenshot_20201225-181320_Photos.jpg?alt=media&token=5423a30f-836b-4b06-8e64-c8812a0efa98",
		"birthDateText" : "17/01/2018",
		"deathDateText" : "",
		"MyNumber" : 612
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 3,
		"famillyName" : "Desmet - de Mahieu",
		"lastName" : "Desmet",
		"firstName" : "Xavier",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F5DA8CA5E-C588-4321-95F8-1CF414DEF61F.jpeg?alt=media&token=ba33abf1-6d6e-4e51-b5ea-67721b63205b",
		"birthDateText" : "16/07/1990",
		"deathDateText" : "",
		"MyNumber" : 620
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 4,
		"famillyName" : "Desmet - de Mahieu",
		"lastName" : "Desmet",
		"firstName" : "Rosalie",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FA5BDB69B-FF8F-478E-9EFD-192EFDCAB7D8.jpeg?alt=media&token=2f1573d9-6563-4e7a-8ad3-4877ca73fa00",
		"birthDateText" : "07/05/2020",
		"deathDateText" : "",
		"MyNumber" : 621
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 3,
		"famillyName" : "del Marmol - de Mahieu",
		"lastName" : "del Marmol",
		"firstName" : "Maximilien",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FCapture%20d%E2%80%99e%CC%81cran%202020-01-19%20a%CC%80%2020.26.10.png?alt=media&token=3e39355e-2f64-4670-8d10-295649216ab5",
		"birthDateText" : "27/05/1993",
		"deathDateText" : "",
		"MyNumber" : 630
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu - Doat",
		"lastName" : "de Mahieu Doat",
		"firstName" : "Aurore",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2F20201224_172949.jpg?alt=media&token=33a80b0d-66e7-4add-96f1-99076e019998",
		"birthDateText" : "18/01/2016",
		"deathDateText" : "",
		"MyNumber" : 710
	},
	{
		"creationDate" : "24-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu - Doat",
		"lastName" : "de Mahieu Doat",
		"firstName" : "Gabriel",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FGabriel%20de%20Mahieu.jpg?alt=media&token=a7ac1594-94ef-4c1e-bc1f-0941740b5418",
		"birthDateText" : "08/02/2017",
		"deathDateText" : "",
		"MyNumber" : 711
	},
	{
		"creationDate" : "22-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu - Doat",
		"lastName" : "de Mahieu Doat",
		"firstName" : "Louise",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201125_203350.jpg?alt=media&token=957c95ed-9725-44c7-9e51-497e350dd94e",
		"birthDateText" : "06/04/2018",
		"deathDateText" : "",
		"MyNumber" : 712
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu-Tock",
		"lastName" : "Tock",
		"firstName" : "Isabelle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201213_152441.jpg?alt=media&token=333c4488-1780-442f-b586-0bf359a6dc71",
		"birthDateText" : "02/09/1988",
		"deathDateText" : "",
		"MyNumber" : 720
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu-Tock",
		"lastName" : "de Mahieu ",
		"firstName" : "Virgile",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201104_100634.jpg?alt=media&token=f07ef692-b1b9-4244-93fe-4ca6e7bb30ee",
		"birthDateText" : "16/03/2015",
		"deathDateText" : "",
		"MyNumber" : 721
	},
	{
		"creationDate" : "25-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu-Tock",
		"lastName" : "de Mahieu",
		"firstName" : "Martial",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201211_210031.jpg?alt=media&token=b9f6bbe5-7a70-48db-8b81-bf01a137b214",
		"birthDateText" : "26/06/2019",
		"deathDateText" : "",
		"MyNumber" : 722
	},
	{
		"creationDate" : "30-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - Aerts",
		"lastName" : "Aerts",
		"firstName" : "Jelle",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20170429_112224.jpg?alt=media&token=5e35742b-ee85-4d73-8e75-78633c20f0ed",
		"birthDateText" : "01/06/1990",
		"deathDateText" : "",
		"MyNumber" : 730
	},
	{
		"creationDate" : "20-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - D'herde",
		"lastName" : "D'herde",
		"firstName" : "Adeline",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FAdeline%20D'herde.jpg?alt=media&token=76acf063-c94d-4e4d-bd99-da265e9c00ce",
		"birthDateText" : "30/10/1994",
		"deathDateText" : "",
		"MyNumber" : 740
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 3,
		"famillyName" : "de Mahieu - henry de frahan",
		"lastName" : "Henry de Frahan",
		"firstName" : "Gaëtane",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG-20190918-WA0022.jpg?alt=media&token=4cf3fab2-0080-4fb2-9c5f-1997dcd0962f",
		"birthDateText" : "20/04/1994",
		"deathDateText" : "",
		"MyNumber" : 750
	},
	{
		"creationDate" : "21-12-20",
		"generation" : 4,
		"famillyName" : "de Mahieu - henry de frahan",
		"lastName" : "de Mahieu",
		"firstName" : "Arthur",
		"pictureName" : "https://firebasestorage.googleapis.com/v0/b/demahieu-file.appspot.com/o/images%2FIMG_20201211_194145.jpg?alt=media&token=096c27a2-997f-4e00-89c3-1e178d695b8b",
		"birthDateText" : "17/12/2019",
		"deathDateText" : "",
		"MyNumber" : 751
	}
]



function MyFilter(numberFamily){
    filteredData = [];
    data.map((person) => {
        if(Math.floor(person.MyNumber/10) === numberFamily || person.MyNumber === numberFamily){
            filteredData.push(person);
        }
    }
    )
    return filteredData;
}

export default {
    MyFilter
};*/}
