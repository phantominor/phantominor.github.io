# n - 主題
## 小標題
- abc: 條列式
1. 也是條列式
直接打字會是 <p>
+ table: []
+ note: []
+ mnemonic: []
+ image: [/assets/images/....png]

=======================================================================================

# 1 - 細菌若具有攝取並利用外源性胸腺嘧啶（exogenous thymidine）之能力，通常對於哪些抗生素具有抗藥性？
這是 114 年寒考一階醫學 (二) 的第一題，問這個問題之前，得要先了解 thymidine 的合成途徑。若抗生素無法阻止細菌 thymidine 的製造 (即細菌可申請外援提供原料)，那麼抗生素自然是無效了。
## Purine 合成途徑有二：de novo 或 salvage pathway。
1. De novo: Ribose 5-P -> PRPP -> IMP -> AMP or GMP
	- 其中 PRPP 的合成需要 PRPP synthetase (磷酸核糖焦磷酸合成酶)。
	- PRPP 轉變為 IMP 的過程需要五樣原料：**Gly、Asp、Gln、CO2、methyl-THF**，其中 methyl-THF 提供 C2、C8 兩顆碳原子。此過程可以被 **6-MP (或其 prodrug azathioprine)** 抑制。
	- IMP 轉變為 AMP 與 GMP 的過程**分別需要 Asp、Gln 作為催化劑**，其中 GMP 的生成會被 mycophenolate、ribavirin 抑制。
	+ mnemonic: [
		Cats **purr** until they **GAG** and **cough** on **fur** balls.
		Purine 合成需要 **Gly、Asp、Gln、CO2、methyl-THF** 五樣原料]
2. Salvage pathway
	- 指的是由後續 GMP 與 IMP 合成 guanine 與 hypoxanthine 後，可以再藉由 HGPRT 這個酵素逆向將兩者復原成 GMP 與 IMP。
	+ note: [HGPRT 指的是 hypoxanthine guanine phosphoribosyltransferase，全名便寫得很清楚是哪兩個 free bases 可以被逆轉回 nucleotides 的狀態。若先天缺乏此酵素，即為 **Lesch-Nyhan syndrome**，X-linked recessive，會導致代償性的大量走 de novo 的途徑生成 purine，因此會有高尿酸血症。]
## Pyrimidine 合成途徑亦有二，但皆是 de novo。
1. from Ribose 5-P: Ribose 5-P -> PRPP -> UMP -> UDP ---> CTP or dTMP
	- 與 purine 的 de novo 途徑相似，同樣由 PRPP 生成，但前驅物從 IMP 改成 UMP，因此後續生成嘧啶。
	- 生成 UMP 的步驟是關鍵，需要 UMP synthase，先天缺乏會導致 **^orotic aciduria^-(link to #7)**。
	- UDP 可直接生成 CTP，但無法直接生成 dTMP。UDP 須先由 ribonucleotide reductase 轉換為 dUDP (去氫)，接著去除一磷酸為 dUMP，再經由亞葉酸 (leucovorin) 與 thymidylate synthase 的催化才能變成最終產物 dTMP。
	- dTMP 生成所需的關鍵酵素 thymidylate synthase 可被 **5-FU (或其 prodrug capecitabine)** 抑制。
	+ note: [通常使用 5-FU 時，會併用 leucovorin stabilizer 以提升療效。]
	- Leucovorin 需要經由葉酸循環產生，而**本題答案 MTX、TMP、pyrimethamine 等正是抑制葉酸循環的藥物**！dTMP 生成的酵素被抑制，便會導致 dTMP 的生成減少，進而使 DNA 複製受阻，此時特別是快速分裂的細胞（如細菌）便會受到極大影響，達到抗生素的效果。
2. from glutamine: Gln + CO2 -> carbamoyl phosphate -> orotic acid -> UMP -> ... -> CTP or dTMP
	- Carbamoyl phosphate (胺甲醯磷酸酯) 的生成需要 2 ATP、CPS2 (carbamoyl phosphate synthetase II)，而原料 glutamine 則會被轉變為副產物 glutamate。
	- 從 glutamine 生成的途徑**需要 aspartate**！Carbamoyl phosphate 加 aspartate 便會生成 orotic acid (乳清酸)。而乳清酸經 UMP synthase 便能轉變為 UMP，匯合到第一條路徑之中。因此，若 UMP synthase 不足，上游的乳清酸便會增加，導致乳清酸尿症。
	- 乳清酸的生成可以被 leflunomide 抑制。
就結論而言，所有 pyrimidine 合成途徑上的抑制劑都可以導致 thymidine 的合成減少，而細菌若能取得外源性的 thymidine 便可繞開這些抗生素的作用範圍，不過，最直接影響 thymidine 合成的抗生素應是抑制葉酸循環的那一群，包括 **MTX、TMP、pyrimethamine** 等。
+ image: [de_novo_pyrimidine_and_purine_synthesis.png]

# 2 - 嘌呤和嘧啶的結構為何？能從合成途徑看出端倪嗎？
欸可以！仔細思考合成途徑加入過的東西，便可大致推出兩者的結構了！
+ image: [purine_and_pyrimidine_structure.png]
- 前面說過 ^PRPP 轉變為 IMP 的過程需要五樣原料：**Gly、Asp、Gln、CO2、methyl-THF**^(link to #1)，剛好就是嘌呤基本結構的形成！
- 嘧啶的合成原料為 carbamoyl phosphate 以及 aspartate，因此結構上即可觀察到這兩個元件。
+ note: [CPS2 存在嘌呤合成途徑之中，因此所有細胞皆有；至於 ^CPS1 則僅用於尿素循環^-(link to #3)，因此多位於肝腎細胞的粒線體。兩者皆為各自路徑的速率決定步驟。]

# 3 - CPS1 在尿素循環中扮演什麼角色？
尿素循環 (urea cycle) 的主要功能為代謝掉胺基酸分解所產生的無用廢物：氮。整個循環分為兩部分，一部分在粒線體中進行，另一部分在細胞質中進行。
CPS1 在尿素循環中扮演重要角色，可以將重碳酸根和水藉由 ATP 合成為 carbamoyl phosphate (胺甲醯磷酸酯)，其中胺甲醯基再藉由 ornithine transcarbamylase 轉換到 ornithine 上，合成 citrulline (瓜胺酸)。
+ image: [urea_cycle.png]

# 4 - 既然 CPS1、CPS2 都催化生成 carbamoyl phosphate，那麼兩途徑間會不會互相影響？
當然是會！若 urea cycle 中 CPS1 正常，但下游的 ornithine transcarbamylase (OT) 缺乏，會導致 carbamoyl phosphate 堆積，無法進入尿素循環。此時，多餘的 carbamoyl phosphate 便只能回去走 pyrimidine synthesis pathway，往下生成 orotic acid 了。這有一種先天性的疾病叫做 **^ornithine transcarbamylase deficiency (OTD)^(link to #5)**，便是因為缺乏 OT 導致血清和尿液中的 orotic acid (乳清酸) 不正常累積，同時也因尿素循環受阻導致高血氮 (氮血症)。

# 5 - 鳥胺酸胺甲基轉移酶缺乏症 (OTD)
最常見的 urea cycle disorder，X-linked recessive。
+ note: [其他所有 urea cycle disorder 都是 autosomal recessive，只有 OTD 是性聯遺傳！]
- 通常症狀會在出生後幾天即產生。
- 無法進入尿素循環的 carbamoyl phosphate 會走嘧啶生合成途徑併成 orotic acid (乳清酸)。
- 會發現血與尿中 orotic acid 增加，BUN (尿素氮) 下降，且有明顯 ^hyperammonemia 的症狀^-(link to #6)。
- 無巨球性貧血！(相對於 ^orotic aciduria^-(link to #7) 會產生巨球性貧血而言。)

# 6 - 氮血症 (Hyperammonemia) 是什麼？有什麼症狀？
- 病因
	1. 先天異常：urea cycle enzyme deficiencies (eg. ornithine transcarbamoylase deficiency)。
	2. 後天受損：liver diseases (eg. hepatic encephalopathy)。
- 症狀：大腦水腫、嘔吐、視野模糊、吶吃 (slurring of speech)、嗜睡 (somnolence)、flapping tremor (asterixis)。
- 機轉
	1. 氮會將 α-ketoglutarate (in TCA cycle)、glutamate 合成為 glutamine。
	2. α-ketoglutarate 減少，導致 TCA cycle 被抑制。
	3. Glutamate 減少導致 GABA 的合成減少。
	4. Glutamine 增加導致腦中滲透壓改變，可能引發大腦水腫 (glutamine-induced osmotic shifts)。
- 治療
	1. 生活根本上的調整：需減少飲食中胺基酸的攝取。
	2. 藥物包括 lactulose (乳果糖，口服以酸化 GI tract 抓住氨根離子，增加排除)、rifaximin (抗生素，減少 ammoniagenic bacteria)、benzoate、phenylacetate 以及 phenylbutyrate (此三者可增加 glutamine 由腎的排除)。
+ image: [hyperammonemia_mechanism.png]

# 7 - 乳清酸尿症 (Orotic aciduria) 為何？
- 病因：UMP synthase deficiency，autosomal recessive。
- 症狀：無法生長、發育延遲、巨球性貧血 (用葉酸與 vit B12 治療無效)；無氮血症 (與 ^ornithine transcarbamylase deficiency^(link to #5) 相反)。(後見^兩者鑑別要點^-(link to #8))
- 治療：uridine monophosphate、uridine triacetate (藉此 bypass 突變的基因)。
+ table:[
	特徵	OTC缺乏症（Ornithine Transcarbamoylase Deficiency）	原發性乳清酸尿症（Orotic Aciduria）
	病因	X染色體隱性遺傳的尿素循環障礙，OTC 酶缺乏導致尿素循環無法正常進行。	嘧啶合成途徑中，**UMP合成酶（UMP synthase）**的缺乏。
	主要代謝問題	無法將氨基甲酰磷酸與鳥胺酸（ornithine）結合生成瓜氨酸（citrulline）。	嘧啶合成障礙，UMP無法正常生成，乳清酸累積。
	氨濃度（Ammonia）	高氨血症（Hyperammonemia）： 尿素循環中斷，導致血氨水平升高。	正常氨濃度： 不影響尿素循環，氨濃度不升高。
	乳清酸水平	升高（因氨基甲酰磷酸累積，過度刺激嘧啶合成路徑）。	升高（因UMP合成酶缺陷，乳清酸無法正常轉化）。
	臨床症狀	嚴重高氨血症相關症狀，如嗜睡、嘔吐、腦病變（encephalopathy）。	成長遲緩、貧血（巨紅細胞性貧血，macrocytic anemia），但無高氨血症症狀。
	治療方式	限制蛋白質攝入、服用苯甲酸（benzoate）或苯丁酸（phenylbutyrate）以減少氮負荷；可能需透析。	補充尿苷酸（uridine monophosphate, UMP）作為外源性核苷酸補充。
	遺傳方式	X 染色體隱性遺傳，男性多見。	體染色體隱性遺傳，性別分布無差異。
]

# 8 - Orotic aciduria 和 OTD 要如何鑑別？
1. 尿中乳清酸水平升高的病因：
	- 如果伴隨高氨血症 → OTD。
	- 如果氨血症正常且有巨球性貧血 → 原發性乳清酸尿症。
2. 臨床檢驗輔助：
	- 氨濃度測定： 高血氨 → OTD。
	- 紅血球形態學： 巨紅細胞性貧血 → 原發性乳清酸尿症。
	- 基因檢測： 確定何種酵素缺陷或突變。

# Ribose 5-P 是哪裡來的！？
這是一個好問題 五探堂磷酸路徑



