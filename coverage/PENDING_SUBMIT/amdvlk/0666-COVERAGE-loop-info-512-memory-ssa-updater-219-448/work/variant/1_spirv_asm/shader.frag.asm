; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 138
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %122
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %41 "i"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_float_values"
               OpName %83 ""
               OpName %87 "buf2"
               OpMemberName %87 0 "one"
               OpName %89 ""
               OpName %122 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
               OpMemberDecorate %87 0 Offset 0
               OpDecorate %87 Block
               OpDecorate %89 DescriptorSet 0
               OpDecorate %89 Binding 2
               OpDecorate %122 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 3
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpTypePointer Uniform %6
         %40 = OpTypePointer Function %6
         %42 = OpConstant %6 1
         %49 = OpConstant %6 10
         %50 = OpTypeBool
         %61 = OpConstant %6 7
         %70 = OpConstant %6 8
         %78 = OpTypeFloat 32
         %79 = OpConstant %7 1
         %80 = OpTypeArray %78 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %78
         %87 = OpTypeStruct %78
         %88 = OpTypePointer Uniform %87
         %89 = OpVariable %88 Uniform
        %109 = OpConstant %6 2
        %120 = OpTypeVector %78 4
        %121 = OpTypePointer Output %120
        %122 = OpVariable %121 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %41 = OpVariable %40 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %6 %19
         %21 = OpAccessChain %18 %16 %17 %17
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %18 %16 %17 %17
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %18 %16 %17 %17
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %18 %16 %17 %17
         %28 = OpLoad %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %18 %16 %17 %17
         %32 = OpLoad %6 %31
         %33 = OpAccessChain %18 %16 %17 %17
         %34 = OpLoad %6 %33
         %35 = OpAccessChain %18 %16 %17 %17
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %18 %16 %17 %17
         %38 = OpLoad %6 %37
         %39 = OpCompositeConstruct %9 %20 %22 %24 %26 %28 %30 %32 %34 %36 %38
               OpStore %11 %39
               OpStore %41 %42
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %47
         %47 = OpLabel
         %48 = OpLoad %6 %41
         %51 = OpSLessThan %50 %48 %49
               OpBranchConditional %51 %44 %45
         %44 = OpLabel
         %52 = OpLoad %6 %41
         %53 = OpINotEqual %50 %52 %42
               OpSelectionMerge %55 None
               OpBranchConditional %53 %54 %55
         %54 = OpLabel
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %57
         %57 = OpLabel
         %60 = OpLoad %6 %41
         %62 = OpINotEqual %50 %60 %61
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %64
         %63 = OpLabel
               OpBranch %65
         %65 = OpLabel
               OpLoopMerge %67 %68 None
               OpBranch %66
         %66 = OpLabel
         %69 = OpLoad %6 %41
         %71 = OpIEqual %50 %69 %70
               OpSelectionMerge %73 None
               OpBranchConditional %71 %72 %73
         %72 = OpLabel
         %74 = OpLoad %6 %41
         %75 = OpAccessChain %18 %16 %17 %42
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %40 %11 %74
               OpStore %77 %76
               OpBranch %73
         %73 = OpLabel
               OpBranch %68
         %68 = OpLabel
         %85 = OpAccessChain %84 %83 %17 %17
         %86 = OpLoad %78 %85
         %90 = OpAccessChain %84 %89 %17
         %91 = OpLoad %78 %90
         %92 = OpFOrdGreaterThan %50 %86 %91
               OpBranchConditional %92 %65 %67
         %67 = OpLabel
               OpBranch %64
         %64 = OpLabel
               OpBranch %59
         %59 = OpLabel
         %93 = OpAccessChain %84 %83 %17 %17
         %94 = OpLoad %78 %93
         %95 = OpAccessChain %84 %89 %17
         %96 = OpLoad %78 %95
         %97 = OpFOrdGreaterThan %50 %94 %96
               OpBranchConditional %97 %56 %58
         %58 = OpLabel
               OpBranch %55
         %55 = OpLabel
               OpBranch %46
         %46 = OpLabel
         %98 = OpLoad %6 %41
         %99 = OpIAdd %6 %98 %42
               OpStore %41 %99
               OpBranch %43
         %45 = OpLabel
        %100 = OpAccessChain %18 %16 %17 %17
        %101 = OpLoad %6 %100
        %102 = OpAccessChain %40 %11 %101
        %103 = OpLoad %6 %102
        %104 = OpAccessChain %18 %16 %17 %17
        %105 = OpLoad %6 %104
        %106 = OpIEqual %50 %103 %105
               OpSelectionMerge %108 None
               OpBranchConditional %106 %107 %108
        %107 = OpLabel
        %110 = OpAccessChain %18 %16 %17 %109
        %111 = OpLoad %6 %110
        %112 = OpAccessChain %40 %11 %111
        %113 = OpLoad %6 %112
        %114 = OpAccessChain %18 %16 %17 %42
        %115 = OpLoad %6 %114
        %116 = OpIEqual %50 %113 %115
               OpBranch %108
        %108 = OpLabel
        %117 = OpPhi %50 %106 %45 %116 %107
               OpSelectionMerge %119 None
               OpBranchConditional %117 %118 %136
        %118 = OpLabel
        %123 = OpAccessChain %18 %16 %17 %17
        %124 = OpLoad %6 %123
        %125 = OpConvertSToF %78 %124
        %126 = OpAccessChain %18 %16 %17 %42
        %127 = OpLoad %6 %126
        %128 = OpConvertSToF %78 %127
        %129 = OpAccessChain %18 %16 %17 %42
        %130 = OpLoad %6 %129
        %131 = OpConvertSToF %78 %130
        %132 = OpAccessChain %18 %16 %17 %17
        %133 = OpLoad %6 %132
        %134 = OpConvertSToF %78 %133
        %135 = OpCompositeConstruct %120 %125 %128 %131 %134
               OpStore %122 %135
               OpBranch %119
        %136 = OpLabel
               OpKill
        %119 = OpLabel
               OpReturn
               OpFunctionEnd
