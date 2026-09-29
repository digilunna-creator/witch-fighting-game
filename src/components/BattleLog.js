import React, { useEffect, useRef } from 'react';
import './BattleLog.css';

function BattleLog({ battleLog }) {
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [battleLog]);

  return (
    <div className="battle-log">
      <div className="log-content">
        {battleLog.map((log, index) => (
          <p key={index} className="log-entry">
            {log}
          </p>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
}

export default BattleLog;
