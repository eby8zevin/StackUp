package com.ahmadabuhasan.myintentapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnMoveActivity = findViewById(R.id.move_activity);
        btnMoveActivity.setOnClickListener(this);

        Button btnMoveActivityData = findViewById(R.id.move_activitydata);
        btnMoveActivityData.setOnClickListener(this);

        Button btnDial = findViewById(R.id.move_dial);
        btnDial.setOnClickListener(this);

        Button btnResult = findViewById(R.id.move_result);
        btnResult.setOnClickListener(this);

        TextView tvResult = findViewById(R.id.tv_result);
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String message = extras.getString("radioChosen");
            tvResult.setText(message);
        }
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.move_activity:
                Intent moveIntent = new Intent(MainActivity.this, MoveActivity.class);
                startActivity(moveIntent);
                break;
            case R.id.move_activitydata:
                Intent moveData = new Intent(MainActivity.this, DataActivity.class);
                moveData.putExtra(DataActivity.EXTRA_NAME, "String");
                moveData.putExtra(DataActivity.EXTRA_AGE, 21);
                startActivity(moveData);
                break;
            case R.id.move_dial:
                String numberPhone = "08123456789";
                Intent dialPhone = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + numberPhone));
                startActivity(dialPhone);
                break;
            case R.id.move_result:
                Intent moveResult = new Intent(MainActivity.this, ResultActivity.class);
                startActivity(moveResult);
                break;
        }
    }
}
