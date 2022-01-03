; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 183
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %164
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr0"
               OpName %15 "buf0"
               OpMemberName %15 0 "_GLF_uniform_int_values"
               OpName %17 ""
               OpName %43 "arr1"
               OpName %76 "k"
               OpName %80 "j"
               OpName %83 "i"
               OpName %90 "buf1"
               OpMemberName %90 0 "three"
               OpName %92 ""
               OpName %164 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 0
               OpMemberDecorate %90 0 Offset 0
               OpDecorate %90 Block
               OpDecorate %92 DescriptorSet 0
               OpDecorate %92 Binding 1
               OpDecorate %164 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %6 0
         %13 = OpConstant %7 20
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpConstant %6 13
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 2
         %23 = OpConstant %6 12
         %26 = OpConstant %6 15
         %29 = OpConstant %6 16
         %34 = OpConstant %6 1
         %39 = OpConstant %6 3
         %44 = OpConstant %6 4
         %47 = OpConstant %6 5
         %50 = OpConstant %6 6
         %53 = OpConstant %6 7
         %56 = OpConstant %6 8
         %59 = OpConstant %6 9
         %62 = OpConstant %6 10
         %65 = OpConstant %6 17
         %68 = OpConstant %6 18
         %71 = OpConstant %6 19
         %75 = OpTypePointer Function %6
         %77 = OpConstant %6 14
         %90 = OpTypeStruct %6
         %91 = OpTypePointer Uniform %90
         %92 = OpVariable %91 Uniform
         %95 = OpTypeBool
        %140 = OpConstant %6 11
        %161 = OpTypeFloat 32
        %162 = OpTypeVector %161 4
        %163 = OpTypePointer Output %162
        %164 = OpVariable %163 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %43 = OpVariable %10 Function
         %76 = OpVariable %75 Function
         %80 = OpVariable %75 Function
         %83 = OpVariable %75 Function
         %20 = OpAccessChain %19 %17 %12 %18
         %21 = OpLoad %6 %20
         %24 = OpAccessChain %19 %17 %12 %23
         %25 = OpLoad %6 %24
         %27 = OpAccessChain %19 %17 %12 %26
         %28 = OpLoad %6 %27
         %30 = OpAccessChain %19 %17 %12 %29
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %19 %17 %12 %12
         %33 = OpLoad %6 %32
         %35 = OpAccessChain %19 %17 %12 %34
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %19 %17 %12 %22
         %38 = OpLoad %6 %37
         %40 = OpAccessChain %19 %17 %12 %39
         %41 = OpLoad %6 %40
         %42 = OpCompositeConstruct %9 %12 %21 %22 %25 %28 %31 %33 %36 %38 %41
               OpStore %11 %42
         %45 = OpAccessChain %19 %17 %12 %44
         %46 = OpLoad %6 %45
         %48 = OpAccessChain %19 %17 %12 %47
         %49 = OpLoad %6 %48
         %51 = OpAccessChain %19 %17 %12 %50
         %52 = OpLoad %6 %51
         %54 = OpAccessChain %19 %17 %12 %53
         %55 = OpLoad %6 %54
         %57 = OpAccessChain %19 %17 %12 %56
         %58 = OpLoad %6 %57
         %60 = OpAccessChain %19 %17 %12 %59
         %61 = OpLoad %6 %60
         %63 = OpAccessChain %19 %17 %12 %62
         %64 = OpLoad %6 %63
         %66 = OpAccessChain %19 %17 %12 %65
         %67 = OpLoad %6 %66
         %69 = OpAccessChain %19 %17 %12 %68
         %70 = OpLoad %6 %69
         %72 = OpAccessChain %19 %17 %12 %71
         %73 = OpLoad %6 %72
         %74 = OpCompositeConstruct %9 %46 %49 %52 %55 %58 %61 %64 %67 %70 %73
               OpStore %43 %74
         %78 = OpAccessChain %19 %17 %12 %77
         %79 = OpLoad %6 %78
               OpStore %76 %79
         %81 = OpAccessChain %19 %17 %12 %77
         %82 = OpLoad %6 %81
               OpStore %80 %82
               OpStore %83 %12
               OpBranch %84
         %84 = OpLabel
               OpLoopMerge %86 %87 None
               OpBranch %88
         %88 = OpLabel
         %89 = OpLoad %6 %83
         %93 = OpAccessChain %19 %92 %12
         %94 = OpLoad %6 %93
         %96 = OpSLessThan %95 %89 %94
               OpBranchConditional %96 %85 %86
         %85 = OpLabel
         %97 = OpLoad %6 %76
         %98 = OpIAdd %6 %97 %34
               OpStore %76 %98
         %99 = OpLoad %6 %80
        %100 = OpIAdd %6 %99 %34
               OpStore %80 %100
        %101 = OpAccessChain %75 %11 %99
        %102 = OpLoad %6 %101
        %103 = OpAccessChain %75 %43 %97
               OpStore %103 %102
               OpBranch %87
         %87 = OpLabel
        %104 = OpLoad %6 %83
        %105 = OpIAdd %6 %104 %34
               OpStore %83 %105
               OpBranch %84
         %86 = OpLabel
        %106 = OpAccessChain %75 %43 %34
        %107 = OpLoad %6 %106
        %108 = OpAccessChain %75 %11 %34
               OpStore %108 %107
        %109 = OpAccessChain %75 %11 %12
        %110 = OpLoad %6 %109
        %111 = OpIEqual %95 %110 %12
               OpSelectionMerge %113 None
               OpBranchConditional %111 %112 %113
        %112 = OpLabel
        %114 = OpAccessChain %75 %11 %34
        %115 = OpLoad %6 %114
        %116 = OpIEqual %95 %115 %34
               OpBranch %113
        %113 = OpLabel
        %117 = OpPhi %95 %111 %86 %116 %112
               OpSelectionMerge %119 None
               OpBranchConditional %117 %118 %119
        %118 = OpLabel
        %120 = OpAccessChain %75 %11 %22
        %121 = OpLoad %6 %120
        %122 = OpIEqual %95 %121 %22
               OpBranch %119
        %119 = OpLabel
        %123 = OpPhi %95 %117 %113 %122 %118
               OpSelectionMerge %125 None
               OpBranchConditional %123 %124 %125
        %124 = OpLabel
        %126 = OpAccessChain %75 %43 %12
        %127 = OpLoad %6 %126
        %128 = OpAccessChain %19 %17 %12 %77
        %129 = OpLoad %6 %128
        %130 = OpIEqual %95 %127 %129
               OpBranch %125
        %125 = OpLabel
        %131 = OpPhi %95 %123 %119 %130 %124
               OpSelectionMerge %133 None
               OpBranchConditional %131 %132 %133
        %132 = OpLabel
        %134 = OpAccessChain %75 %43 %34
        %135 = OpLoad %6 %134
        %136 = OpIEqual %95 %135 %34
               OpBranch %133
        %133 = OpLabel
        %137 = OpPhi %95 %131 %125 %136 %132
               OpSelectionMerge %139 None
               OpBranchConditional %137 %138 %139
        %138 = OpLabel
        %141 = OpAccessChain %19 %17 %12 %140
        %142 = OpLoad %6 %141
        %143 = OpAccessChain %75 %43 %142
        %144 = OpLoad %6 %143
        %145 = OpAccessChain %19 %17 %12 %140
        %146 = OpLoad %6 %145
        %147 = OpIEqual %95 %144 %146
               OpBranch %139
        %139 = OpLabel
        %148 = OpPhi %95 %137 %133 %147 %138
               OpSelectionMerge %150 None
               OpBranchConditional %148 %149 %150
        %149 = OpLabel
        %151 = OpAccessChain %19 %17 %12 %23
        %152 = OpLoad %6 %151
        %153 = OpAccessChain %75 %43 %152
        %154 = OpLoad %6 %153
        %155 = OpAccessChain %19 %17 %12 %53
        %156 = OpLoad %6 %155
        %157 = OpIEqual %95 %154 %156
               OpBranch %150
        %150 = OpLabel
        %158 = OpPhi %95 %148 %139 %157 %149
               OpSelectionMerge %160 None
               OpBranchConditional %158 %159 %178
        %159 = OpLabel
        %165 = OpAccessChain %19 %17 %12 %18
        %166 = OpLoad %6 %165
        %167 = OpConvertSToF %161 %166
        %168 = OpAccessChain %19 %17 %12 %77
        %169 = OpLoad %6 %168
        %170 = OpConvertSToF %161 %169
        %171 = OpAccessChain %19 %17 %12 %77
        %172 = OpLoad %6 %171
        %173 = OpConvertSToF %161 %172
        %174 = OpAccessChain %19 %17 %12 %18
        %175 = OpLoad %6 %174
        %176 = OpConvertSToF %161 %175
        %177 = OpCompositeConstruct %162 %167 %170 %173 %176
               OpStore %164 %177
               OpBranch %160
        %178 = OpLabel
        %179 = OpAccessChain %19 %17 %12 %77
        %180 = OpLoad %6 %179
        %181 = OpConvertSToF %161 %180
        %182 = OpCompositeConstruct %162 %181 %181 %181 %181
               OpStore %164 %182
               OpBranch %160
        %160 = OpLabel
               OpReturn
               OpFunctionEnd
