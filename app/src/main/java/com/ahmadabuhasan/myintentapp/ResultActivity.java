package com.ahmadabuhasan.myintentapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.Toast;

public class ResultActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);
        setTitle("Activity for Result");
    }

    public void onRadioButtonClicked(View view) {
        String str = null;
        boolean checked = ((RadioButton) view).isChecked();
        switch (view.getId()) {
            case R.id.rb100:
                if (checked)
                    str = "100";
                break;
            case R.id.rb200:
                if (checked)
                    str = "200";
                break;
            case R.id.rb300:
                if (checked)
                    str = "300";
                break;
        }

        Toast.makeText(getApplicationContext(), str, Toast.LENGTH_SHORT).show();

        Intent radioBtn = new Intent(ResultActivity.this, MainActivity.class);
        radioBtn.putExtra("radioChosen", str);
        startActivity(radioBtn);
    }
}
