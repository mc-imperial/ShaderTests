; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 207
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %128 %144
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %50 "a"
               OpName %53 "i"
               OpName %71 "buf2"
               OpMemberName %71 0 "zero"
               OpName %73 ""
               OpName %83 "b"
               OpName %90 "j"
               OpName %128 "gl_FragCoord"
               OpName %134 "buf0"
               OpMemberName %134 0 "_GLF_uniform_float_values"
               OpName %136 ""
               OpName %144 "_GLF_color"
               OpName %158 "ref"
               OpName %180 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpMemberDecorate %71 0 Offset 0
               OpDecorate %71 Block
               OpDecorate %73 DescriptorSet 0
               OpDecorate %73 Binding 2
               OpDecorate %128 BuiltIn FragCoord
               OpDecorate %133 ArrayStride 16
               OpMemberDecorate %134 0 Offset 0
               OpDecorate %134 Block
               OpDecorate %136 DescriptorSet 0
               OpDecorate %136 Binding 0
               OpDecorate %144 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 11
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 3
         %19 = OpTypePointer Uniform %6
         %24 = OpConstant %6 4
         %27 = OpConstant %6 5
         %30 = OpConstant %6 6
         %33 = OpConstant %6 7
         %36 = OpConstant %6 8
         %39 = OpConstant %6 9
         %42 = OpConstant %6 10
         %45 = OpConstant %6 1
         %49 = OpTypePointer Function %6
         %62 = OpTypeBool
         %71 = OpTypeStruct %6
         %72 = OpTypePointer Uniform %71
         %73 = OpVariable %72 Uniform
         %97 = OpConstant %6 2
        %125 = OpTypeFloat 32
        %126 = OpTypeVector %125 4
        %127 = OpTypePointer Input %126
        %128 = OpVariable %127 Input
        %129 = OpConstant %7 1
        %130 = OpTypePointer Input %125
        %133 = OpTypeArray %125 %129
        %134 = OpTypeStruct %133
        %135 = OpTypePointer Uniform %134
        %136 = OpVariable %135 Uniform
        %137 = OpTypePointer Uniform %125
        %143 = OpTypePointer Output %126
        %144 = OpVariable %143 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %50 = OpVariable %49 Function
         %53 = OpVariable %49 Function
         %83 = OpVariable %49 Function
         %90 = OpVariable %49 Function
        %158 = OpVariable %10 Function
        %180 = OpVariable %49 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %22 = OpAccessChain %19 %16 %17 %17
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %19 %16 %17 %24
         %26 = OpLoad %6 %25
         %28 = OpAccessChain %19 %16 %17 %27
         %29 = OpLoad %6 %28
         %31 = OpAccessChain %19 %16 %17 %30
         %32 = OpLoad %6 %31
         %34 = OpAccessChain %19 %16 %17 %33
         %35 = OpLoad %6 %34
         %37 = OpAccessChain %19 %16 %17 %36
         %38 = OpLoad %6 %37
         %40 = OpAccessChain %19 %16 %17 %39
         %41 = OpLoad %6 %40
         %43 = OpAccessChain %19 %16 %17 %42
         %44 = OpLoad %6 %43
         %46 = OpAccessChain %19 %16 %17 %45
         %47 = OpLoad %6 %46
         %48 = OpCompositeConstruct %9 %21 %23 %26 %29 %32 %35 %38 %41 %44 %47
               OpStore %11 %48
         %51 = OpAccessChain %19 %16 %17 %18
         %52 = OpLoad %6 %51
               OpStore %50 %52
               OpStore %53 %45
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %6 %53
         %60 = OpAccessChain %19 %16 %17 %27
         %61 = OpLoad %6 %60
         %63 = OpSLessThan %62 %59 %61
               OpBranchConditional %63 %55 %56
         %55 = OpLabel
         %64 = OpLoad %6 %50
         %65 = OpAccessChain %19 %16 %17 %17
         %66 = OpLoad %6 %65
         %67 = OpSGreaterThanEqual %62 %64 %66
               OpSelectionMerge %69 None
               OpBranchConditional %67 %68 %69
         %68 = OpLabel
               OpBranch %56
         %69 = OpLabel
         %74 = OpAccessChain %19 %73 %17
         %75 = OpLoad %6 %74
         %76 = OpAccessChain %19 %16 %17 %18
         %77 = OpLoad %6 %76
         %78 = OpSLessThan %62 %75 %77
               OpSelectionMerge %80 None
               OpBranchConditional %78 %79 %80
         %79 = OpLabel
         %81 = OpLoad %6 %50
         %82 = OpIAdd %6 %81 %45
               OpStore %50 %82
               OpBranch %80
         %80 = OpLabel
         %84 = OpAccessChain %19 %16 %17 %17
         %85 = OpLoad %6 %84
               OpStore %83 %85
               OpBranch %86
         %86 = OpLabel
               OpLoopMerge %88 %89 None
               OpBranch %87
         %87 = OpLabel
               OpStore %90 %17
               OpBranch %91
         %91 = OpLabel
               OpLoopMerge %93 %94 None
               OpBranch %95
         %95 = OpLabel
         %96 = OpLoad %6 %90
         %98 = OpAccessChain %19 %16 %17 %97
         %99 = OpLoad %6 %98
        %100 = OpSLessThan %62 %96 %99
               OpBranchConditional %100 %92 %93
         %92 = OpLabel
        %101 = OpLoad %6 %83
        %102 = OpAccessChain %19 %16 %17 %39
        %103 = OpLoad %6 %102
        %104 = OpSGreaterThanEqual %62 %101 %103
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
               OpBranch %93
        %106 = OpLabel
        %108 = OpLoad %6 %83
        %109 = OpIAdd %6 %108 %45
               OpStore %83 %109
        %110 = OpLoad %6 %90
        %111 = OpLoad %6 %53
        %112 = OpIAdd %6 %111 %45
        %113 = OpSLessThan %62 %110 %112
               OpSelectionMerge %115 None
               OpBranchConditional %113 %114 %115
        %114 = OpLabel
               OpBranch %94
        %115 = OpLabel
        %117 = OpLoad %6 %90
        %118 = OpAccessChain %19 %16 %17 %17
        %119 = OpLoad %6 %118
        %120 = OpAccessChain %49 %11 %119
        %121 = OpLoad %6 %120
        %122 = OpAccessChain %49 %11 %117
               OpStore %122 %121
               OpBranch %94
         %94 = OpLabel
        %123 = OpLoad %6 %90
        %124 = OpIAdd %6 %123 %45
               OpStore %90 %124
               OpBranch %91
         %93 = OpLabel
               OpBranch %89
         %89 = OpLabel
        %131 = OpAccessChain %130 %128 %129
        %132 = OpLoad %125 %131
        %138 = OpAccessChain %137 %136 %17 %17
        %139 = OpLoad %125 %138
        %140 = OpFOrdLessThan %62 %132 %139
               OpBranchConditional %140 %86 %88
         %88 = OpLabel
               OpBranch %57
         %57 = OpLabel
        %141 = OpLoad %6 %53
        %142 = OpIAdd %6 %141 %45
               OpStore %53 %142
               OpBranch %54
         %56 = OpLabel
        %145 = OpAccessChain %19 %16 %17 %17
        %146 = OpLoad %6 %145
        %147 = OpConvertSToF %125 %146
        %148 = OpAccessChain %19 %16 %17 %18
        %149 = OpLoad %6 %148
        %150 = OpConvertSToF %125 %149
        %151 = OpAccessChain %19 %16 %17 %18
        %152 = OpLoad %6 %151
        %153 = OpConvertSToF %125 %152
        %154 = OpAccessChain %19 %16 %17 %17
        %155 = OpLoad %6 %154
        %156 = OpConvertSToF %125 %155
        %157 = OpCompositeConstruct %126 %147 %150 %153 %156
               OpStore %144 %157
        %159 = OpAccessChain %19 %16 %17 %18
        %160 = OpLoad %6 %159
        %161 = OpAccessChain %19 %16 %17 %17
        %162 = OpLoad %6 %161
        %163 = OpAccessChain %19 %16 %17 %17
        %164 = OpLoad %6 %163
        %165 = OpAccessChain %19 %16 %17 %17
        %166 = OpLoad %6 %165
        %167 = OpAccessChain %19 %16 %17 %17
        %168 = OpLoad %6 %167
        %169 = OpAccessChain %19 %16 %17 %17
        %170 = OpLoad %6 %169
        %171 = OpAccessChain %19 %16 %17 %36
        %172 = OpLoad %6 %171
        %173 = OpAccessChain %19 %16 %17 %39
        %174 = OpLoad %6 %173
        %175 = OpAccessChain %19 %16 %17 %42
        %176 = OpLoad %6 %175
        %177 = OpAccessChain %19 %16 %17 %45
        %178 = OpLoad %6 %177
        %179 = OpCompositeConstruct %9 %160 %162 %164 %166 %168 %170 %172 %174 %176 %178
               OpStore %158 %179
        %181 = OpAccessChain %19 %16 %17 %18
        %182 = OpLoad %6 %181
               OpStore %180 %182
               OpBranch %183
        %183 = OpLabel
               OpLoopMerge %185 %186 None
               OpBranch %187
        %187 = OpLabel
        %188 = OpLoad %6 %180
        %189 = OpAccessChain %19 %16 %17 %97
        %190 = OpLoad %6 %189
        %191 = OpSLessThan %62 %188 %190
               OpBranchConditional %191 %184 %185
        %184 = OpLabel
        %192 = OpLoad %6 %180
        %193 = OpAccessChain %49 %11 %192
        %194 = OpLoad %6 %193
        %195 = OpLoad %6 %180
        %196 = OpAccessChain %49 %158 %195
        %197 = OpLoad %6 %196
        %198 = OpINotEqual %62 %194 %197
               OpSelectionMerge %200 None
               OpBranchConditional %198 %199 %200
        %199 = OpLabel
        %201 = OpAccessChain %19 %16 %17 %18
        %202 = OpLoad %6 %201
        %203 = OpConvertSToF %125 %202
        %204 = OpCompositeConstruct %126 %203 %203 %203 %203
               OpStore %144 %204
               OpBranch %200
        %200 = OpLabel
               OpBranch %186
        %186 = OpLabel
        %205 = OpLoad %6 %180
        %206 = OpIAdd %6 %205 %45
               OpStore %180 %206
               OpBranch %183
        %185 = OpLabel
               OpReturn
               OpFunctionEnd
