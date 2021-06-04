#version 320 es

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mat2x4 m24 = mat2x4(1.0);

void main()
{
 uint matrix_number = 1u;
 matrix_number = 0u;
 for(int cols = 1; cols <= 4; cols ++)
  {
   for(int rows = 2; rows <= 4; rows ++)
    {
     for(int c = 0; c < cols; c ++)
      {
       for(int r = 0; r < rows; r ++)
        {
         switch(matrix_number)
          {
           case 2u:
           m24[c][r] = 1.0;
           break;
           case 3u:
           discard;
           case 4u:
           return;
           case 6u:
           discard;
           case 8u:
           if(gl_FragCoord.y < 1.0)
            {
             discard;
            }
          }
        }
      }
     matrix_number = matrix_number + 1u;
    }
  }
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 int sum_index = 1;
 for(int cols = 1; cols <= 4; cols ++)
  {
   for(int rows = 1; rows <= 4; rows ++)
    {
     if(injectionSwitch.x > 1.0)
      {
       continue;
      }
     sums[sum_index] = 1.0;
     for(int c = 0; c < cols; c ++)
      {
       for(int r = 0; r < rows; r ++)
        {
         switch(sum_index)
          {
           case 0:
           sums[sum_index] += 1.0;
           break;
           case 2:
           sums[sum_index] += m24[1][1];
          }
        }
      }
     sum_index ++;
    }
  }
}
