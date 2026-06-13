const actionItems = [
  'ペットプロフィールの型定義を最優先で確定する',
  '候補一覧・詳細・フィルタの MVP 画面を実装する',
  '簡易スコア方式でマッチングロジックを段階導入する',
  'lint/build/test を CI で自動化して品質を維持する',
];

export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>PetMatch 改善策ダッシュボード</h1>
      <p style={{ color: '#4a5568', lineHeight: 1.7 }}>
        まずは MVP を短期間で公開し、ユーザーの行動データを使って継続改善する方針を推奨します。
      </p>

      <section style={{ marginTop: 28, background: '#fff', padding: 20, borderRadius: 12 }}>
        <h2 style={{ fontSize: 22, marginTop: 0 }}>優先アクション</h2>
        <ol style={{ lineHeight: 1.9, paddingLeft: 20 }}>
          {actionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
