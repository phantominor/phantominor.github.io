# n - 主題
## 小標題
- abc: 條列式
1. 也是條列式
直接打字會是 <p>
^...^-(link to #?)
+ table: []
+ note: []
+ mnemonic: []
+ image: [/assets/images/....png] (width 70%)
+ 2 image: [] []

style="max-width: 70%; display: block; margin: 0 auto;"
<div class="image-container" style="display: flex; justify-content: space-between; margin: 20px 0;">
  <img src="/assets/images/gustilo_types_1.png" alt="Gustilo Type I to III" style="height: 300px; width: auto;">
  <img src="/assets/images/gustilo_types_2.png" alt="Gustilo Types detail" style="height: 300px; width: auto;">
</div>

=======================================================================================

# 1 - Dioxin vs. plastify agent

# 1 - Aphthous ulcer if chronic?

# 1 - 關節盤是什麼？會在哪裡出現？20250208

=======================================================================================
Original version:

# 1 - AAA
abcabc, abc.
**AA -> BB** -> CC -> DD
- aaa: asdf, ^asdfasdf^-(link to #2).
- bbb: asdf, asdfasdf.
	- **aaaa**: aaasdf.
	- **bbbb**: aaaasdf.
	- cccc: asdfasdf.
+ note: [as_d_fas_d_f: abab, ababcdcd.]
+ image: [asdfasdf.png]
+ mnemonic: [asdfasdf, asdfasdfasdf. -> asdfasdf.]

# 2 - BBB
## ASDF
asdfasdf, qwer.
1. **qwer** is cute.
2. **chaewon** is dwejji.
3. kim^minji^-(link to #3) is my wife.
	- aaah karina is winter.
	- nah yojachingu.
	- hhoo
		- abc: asdfasdf
		- cba: fdsafdsa.
## QWER
qwer is cute absolutely.
- I only support chang nayoung.
- Chang na young is cute.
+ table: [
	a    b    c    d    e
	adfs    aaesaefs    fadsags		afsladfsi		jslfafskjd;l
	aelifs		aeflnfae (rowspan=3)		anflnaefskl		efanfnle		afeef
	adfskjl		zvxjck;l		afudsipdfuasi		dfuipsa
	afsdadsf		fadfads	 dfsfadsadfs		fadsadfsafsd
]
+ note: [asdfasdf, asdfasdfqwer is cute.]
+ image: [qwer.png] (70% width)
+ 2image: [doi.png] [doidoigood.png]

# 3 - Minji
yep is me.
Our new name is NJZ.

Converted version:

<h3 id="q1">1 - AAA</h3>
<div class="content-block">
    <p>abcabc, abc.</p>
    <p><strong>AA → BB</strong> → CC → DD</p>
    <ul>
        <li>aaa: asdf, <a href="q2">asdfasdf</a>.</li>
        <li>bbb: asdf, asdfasdf.
            <ul>
                <li><strong>aaaa</strong>: aaasdf.</li>
                <li><strong>bbbb</strong>: aaaasdf.</li>
                <li>cccc: asdfasdf.</li>
            </ul>
        </li>
    </ul>

    <div class="note">
        as<u>d</u>fas<u>d</u>f: abab, ababcdcd.
    </div>

    <img src="/assets/images/asdfasdf.png" alt="asdfasdf">

    <div class="mnemonic">
        asdfasdf, asdfasdfasdf. → asdfasdf.
    </div>
</div>

<h3 id="q2">2 - BBB</h3>
<div class="content-block">
    <h4>ASDF</h4>
    <p>asdfasdf, qwer.</p>
    <ol>
        <li><strong>qwer</strong> is cute.</li>
        <li><strong>chaewon</strong> is dwejji.</li>
        <li>kim<a href="q3">minji</a> is my wife.
            <ul>
                <li>aaah karina is winter.</li>
                <li>nah yojachingu.</li>
                <li>hhoo
                    <ul>
                        <li>abc: asdfasdf</li>
                        <li>cba: fdsafdsa.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>

    <h4>QWER</h4>
    <p>qwer is cute absolutely.</p>
    <ul>
        <li>I only support chang nayoung.</li>
        <li>Chang na young is cute.</li>
    </ul>

    <table>
        <thead>
            <tr>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>adfs</td>
                <td>aaesaefs</td>
                <td>fadsags</td>
                <td>afsladfsi</td>
                <td>jslfafskjd;l</td>
            </tr>
            <tr>
                <td>aelifs</td>
                <td>aeflnfae</td>
                <td rowspan="3">anflnaefskl</td>
                <td>efanfnle</td>
                <td>afeef</td>
            </tr>
            <tr>
                <td>adfskjl</td>
                <td>zvxjck;l</td>
                <td>afudsipdfuasi</td>
                <td>dfuipsa</td>
            </tr>
            <tr>
                <td>afsdadsf</td>
                <td>fadfads</td>
                <td>dfsfadsadfs</td>
                <td>fadsadfsafsd</td>
            </tr>
        </tbody>
    </table>

    <div class="note">
        asdfasdf, asdfasdfqwer is cute.
    </div>

    <img src="/assets/images/qwer.png" alt="qwer" style="max-width: 70%; display: block; margin: 0 auto;">
    
    <div class="image-container" style="display: flex; justify-content: space-between; margin: 20px 0;">
        <img src="/assets/images/doi.png" alt="doi" style="height: 300px; width: auto;">
        <img src="/assets/images/doidoigood.png" alt="doidoigood" style="height: 300px; width: auto;">
    </div>
</div>

<h3 id="q3">3 - Minji</h3>
<div class="content-block">
    <p>yep is me.</p>
    <p>Our new name is NJZ.</p>
</div>
