; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 208
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %145
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "data0"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %50 "data1"
               OpName %89 "i"
               OpName %102 "j"
               OpName %114 "k"
               OpName %145 "_GLF_color"
               OpName %159 "ref"
               OpName %181 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %145 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 20
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 2
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 1
         %25 = OpConstant %6 3
         %28 = OpConstant %6 4
         %31 = OpConstant %6 5
         %34 = OpConstant %6 6
         %37 = OpConstant %6 7
         %40 = OpConstant %6 8
         %43 = OpConstant %6 9
         %46 = OpConstant %6 10
         %53 = OpConstant %6 11
         %56 = OpConstant %6 12
         %59 = OpConstant %6 13
         %62 = OpConstant %6 14
         %65 = OpConstant %6 15
         %68 = OpConstant %6 16
         %71 = OpConstant %6 17
         %74 = OpConstant %6 18
         %77 = OpConstant %6 19
         %85 = OpTypePointer Function %6
        %100 = OpTypeBool
        %142 = OpTypeFloat 32
        %143 = OpTypeVector %142 4
        %144 = OpTypePointer Output %143
        %145 = OpVariable %144 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %50 = OpVariable %10 Function
         %89 = OpVariable %85 Function
        %102 = OpVariable %85 Function
        %114 = OpVariable %85 Function
        %159 = OpVariable %10 Function
        %181 = OpVariable %85 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %17 %25
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %19 %16 %17 %28
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %19 %16 %17 %31
         %33 = OpLoad %6 %32
         %35 = OpAccessChain %19 %16 %17 %34
         %36 = OpLoad %6 %35
         %38 = OpAccessChain %19 %16 %17 %37
         %39 = OpLoad %6 %38
         %41 = OpAccessChain %19 %16 %17 %40
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %19 %16 %17 %43
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %19 %16 %17 %46
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %9 %21 %24 %27 %30 %33 %36 %39 %42 %45 %48
               OpStore %11 %49
         %51 = OpAccessChain %19 %16 %17 %17
         %52 = OpLoad %6 %51
         %54 = OpAccessChain %19 %16 %17 %53
         %55 = OpLoad %6 %54
         %57 = OpAccessChain %19 %16 %17 %56
         %58 = OpLoad %6 %57
         %60 = OpAccessChain %19 %16 %17 %59
         %61 = OpLoad %6 %60
         %63 = OpAccessChain %19 %16 %17 %62
         %64 = OpLoad %6 %63
         %66 = OpAccessChain %19 %16 %17 %65
         %67 = OpLoad %6 %66
         %69 = OpAccessChain %19 %16 %17 %68
         %70 = OpLoad %6 %69
         %72 = OpAccessChain %19 %16 %17 %71
         %73 = OpLoad %6 %72
         %75 = OpAccessChain %19 %16 %17 %74
         %76 = OpLoad %6 %75
         %78 = OpAccessChain %19 %16 %17 %77
         %79 = OpLoad %6 %78
         %80 = OpCompositeConstruct %9 %52 %55 %58 %61 %64 %67 %70 %73 %76 %79
               OpStore %50 %80
         %81 = OpAccessChain %19 %16 %17 %22
         %82 = OpLoad %6 %81
         %83 = OpAccessChain %19 %16 %17 %22
         %84 = OpLoad %6 %83
         %86 = OpAccessChain %85 %11 %84
         %87 = OpLoad %6 %86
         %88 = OpAccessChain %85 %50 %82
               OpStore %88 %87
         %90 = OpAccessChain %19 %16 %17 %25
         %91 = OpLoad %6 %90
               OpStore %89 %91
               OpBranch %92
         %92 = OpLabel
               OpLoopMerge %94 %95 None
               OpBranch %96
         %96 = OpLabel
         %97 = OpLoad %6 %89
         %98 = OpAccessChain %19 %16 %17 %17
         %99 = OpLoad %6 %98
        %101 = OpSLessThan %100 %97 %99
               OpBranchConditional %101 %93 %94
         %93 = OpLabel
        %103 = OpAccessChain %19 %16 %17 %22
        %104 = OpLoad %6 %103
               OpStore %102 %104
               OpBranch %105
        %105 = OpLabel
               OpLoopMerge %107 %108 None
               OpBranch %109
        %109 = OpLabel
        %110 = OpLoad %6 %102
        %111 = OpAccessChain %19 %16 %17 %17
        %112 = OpLoad %6 %111
        %113 = OpSLessThan %100 %110 %112
               OpBranchConditional %113 %106 %107
        %106 = OpLabel
        %115 = OpLoad %6 %102
               OpStore %114 %115
               OpBranch %116
        %116 = OpLabel
               OpLoopMerge %118 %119 None
               OpBranch %120
        %120 = OpLabel
        %121 = OpLoad %6 %114
        %122 = OpLoad %6 %102
        %123 = OpExtInst %6 %1 SMin %122 %31
        %124 = OpSLessThanEqual %100 %121 %123
               OpBranchConditional %124 %117 %118
        %117 = OpLabel
        %125 = OpLoad %6 %114
        %126 = OpLoad %6 %114
        %127 = OpAccessChain %85 %50 %126
        %128 = OpLoad %6 %127
        %129 = OpAccessChain %85 %11 %125
               OpStore %129 %128
               OpBranch %119
        %119 = OpLabel
        %130 = OpLoad %6 %114
        %131 = OpIAdd %6 %130 %22
               OpStore %114 %131
               OpBranch %116
        %118 = OpLabel
               OpBranch %108
        %108 = OpLabel
        %132 = OpLoad %6 %89
        %133 = OpAccessChain %19 %16 %17 %25
        %134 = OpLoad %6 %133
        %135 = OpSDiv %6 %132 %134
        %136 = OpLoad %6 %102
        %137 = OpIAdd %6 %136 %135
               OpStore %102 %137
               OpBranch %105
        %107 = OpLabel
               OpBranch %95
         %95 = OpLabel
        %138 = OpAccessChain %19 %16 %17 %25
        %139 = OpLoad %6 %138
        %140 = OpLoad %6 %89
        %141 = OpIAdd %6 %140 %139
               OpStore %89 %141
               OpBranch %92
         %94 = OpLabel
        %146 = OpAccessChain %19 %16 %17 %22
        %147 = OpLoad %6 %146
        %148 = OpConvertSToF %142 %147
        %149 = OpAccessChain %19 %16 %17 %18
        %150 = OpLoad %6 %149
        %151 = OpConvertSToF %142 %150
        %152 = OpAccessChain %19 %16 %17 %18
        %153 = OpLoad %6 %152
        %154 = OpConvertSToF %142 %153
        %155 = OpAccessChain %19 %16 %17 %22
        %156 = OpLoad %6 %155
        %157 = OpConvertSToF %142 %156
        %158 = OpCompositeConstruct %143 %148 %151 %154 %157
               OpStore %145 %158
        %160 = OpAccessChain %19 %16 %17 %18
        %161 = OpLoad %6 %160
        %162 = OpAccessChain %19 %16 %17 %22
        %163 = OpLoad %6 %162
        %164 = OpAccessChain %19 %16 %17 %56
        %165 = OpLoad %6 %164
        %166 = OpAccessChain %19 %16 %17 %59
        %167 = OpLoad %6 %166
        %168 = OpAccessChain %19 %16 %17 %62
        %169 = OpLoad %6 %168
        %170 = OpAccessChain %19 %16 %17 %65
        %171 = OpLoad %6 %170
        %172 = OpAccessChain %19 %16 %17 %37
        %173 = OpLoad %6 %172
        %174 = OpAccessChain %19 %16 %17 %40
        %175 = OpLoad %6 %174
        %176 = OpAccessChain %19 %16 %17 %43
        %177 = OpLoad %6 %176
        %178 = OpAccessChain %19 %16 %17 %46
        %179 = OpLoad %6 %178
        %180 = OpCompositeConstruct %9 %161 %163 %165 %167 %169 %171 %173 %175 %177 %179
               OpStore %159 %180
        %182 = OpAccessChain %19 %16 %17 %18
        %183 = OpLoad %6 %182
               OpStore %181 %183
               OpBranch %184
        %184 = OpLabel
               OpLoopMerge %186 %187 None
               OpBranch %188
        %188 = OpLabel
        %189 = OpLoad %6 %181
        %190 = OpAccessChain %19 %16 %17 %17
        %191 = OpLoad %6 %190
        %192 = OpSLessThan %100 %189 %191
               OpBranchConditional %192 %185 %186
        %185 = OpLabel
        %193 = OpLoad %6 %181
        %194 = OpAccessChain %85 %11 %193
        %195 = OpLoad %6 %194
        %196 = OpLoad %6 %181
        %197 = OpAccessChain %85 %159 %196
        %198 = OpLoad %6 %197
        %199 = OpINotEqual %100 %195 %198
               OpSelectionMerge %201 None
               OpBranchConditional %199 %200 %201
        %200 = OpLabel
        %202 = OpAccessChain %19 %16 %17 %18
        %203 = OpLoad %6 %202
        %204 = OpConvertSToF %142 %203
        %205 = OpCompositeConstruct %143 %204 %204 %204 %204
               OpStore %145 %205
               OpBranch %201
        %201 = OpLabel
               OpBranch %187
        %187 = OpLabel
        %206 = OpLoad %6 %181
        %207 = OpIAdd %6 %206 %22
               OpStore %181 %207
               OpBranch %184
        %186 = OpLabel
               OpReturn
               OpFunctionEnd
