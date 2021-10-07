; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 123
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %104
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "data"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %27 "i"
               OpName %45 "i"
               OpName %69 "buf0"
               OpMemberName %69 0 "_GLF_uniform_int_values"
               OpName %71 ""
               OpName %104 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %68 ArrayStride 16
               OpMemberDecorate %69 0 Offset 0
               OpDecorate %69 Block
               OpDecorate %71 DescriptorSet 0
               OpDecorate %71 Binding 0
               OpDecorate %104 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %6 1
         %13 = OpTypeArray %6 %8
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %26 = OpTypePointer Function %17
         %34 = OpConstant %17 3
         %35 = OpTypeBool
         %38 = OpConstant %17 2
         %41 = OpTypePointer Function %6
         %68 = OpTypeArray %17 %8
         %69 = OpTypeStruct %68
         %70 = OpTypePointer Uniform %69
         %71 = OpVariable %70 Uniform
         %72 = OpTypePointer Uniform %17
        %102 = OpTypeVector %6 4
        %103 = OpTypePointer Output %102
        %104 = OpVariable %103 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %27 = OpVariable %26 Function
         %45 = OpVariable %26 Function
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %16 %18 %19
         %24 = OpLoad %6 %23
         %25 = OpCompositeConstruct %9 %12 %22 %24
               OpStore %11 %25
               OpStore %27 %19
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %32
         %32 = OpLabel
         %33 = OpLoad %17 %27
         %36 = OpSLessThan %35 %33 %34
               OpBranchConditional %36 %29 %30
         %29 = OpLabel
         %37 = OpLoad %17 %27
         %39 = OpAccessChain %20 %16 %18 %38
         %40 = OpLoad %6 %39
         %42 = OpAccessChain %41 %11 %37
               OpStore %42 %40
               OpBranch %31
         %31 = OpLabel
         %43 = OpLoad %17 %27
         %44 = OpIAdd %17 %43 %19
               OpStore %27 %44
               OpBranch %28
         %30 = OpLabel
               OpStore %45 %18
               OpBranch %46
         %46 = OpLabel
               OpLoopMerge %48 %49 None
               OpBranch %50
         %50 = OpLabel
         %51 = OpLoad %17 %45
         %52 = OpSLessThan %35 %51 %34
               OpBranchConditional %52 %47 %48
         %47 = OpLabel
         %53 = OpLoad %17 %45
         %54 = OpAccessChain %41 %11 %53
         %55 = OpLoad %6 %54
         %56 = OpAccessChain %20 %16 %18 %19
         %57 = OpLoad %6 %56
         %58 = OpFOrdLessThan %35 %55 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
         %61 = OpLoad %17 %45
         %62 = OpAccessChain %20 %16 %18 %18
         %63 = OpLoad %6 %62
         %64 = OpAccessChain %41 %11 %61
               OpStore %64 %63
               OpBranch %48
         %60 = OpLabel
               OpBranch %49
         %49 = OpLabel
         %66 = OpLoad %17 %45
         %67 = OpIAdd %17 %66 %19
               OpStore %45 %67
               OpBranch %46
         %48 = OpLabel
         %73 = OpAccessChain %72 %71 %18 %38
         %74 = OpLoad %17 %73
         %75 = OpAccessChain %41 %11 %74
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %20 %16 %18 %19
         %78 = OpLoad %6 %77
         %79 = OpFOrdEqual %35 %76 %78
               OpSelectionMerge %81 None
               OpBranchConditional %79 %80 %81
         %80 = OpLabel
         %82 = OpAccessChain %72 %71 %18 %19
         %83 = OpLoad %17 %82
         %84 = OpAccessChain %41 %11 %83
         %85 = OpLoad %6 %84
         %86 = OpAccessChain %20 %16 %18 %18
         %87 = OpLoad %6 %86
         %88 = OpFOrdEqual %35 %85 %87
               OpBranch %81
         %81 = OpLabel
         %89 = OpPhi %35 %79 %48 %88 %80
               OpSelectionMerge %91 None
               OpBranchConditional %89 %90 %91
         %90 = OpLabel
         %92 = OpAccessChain %72 %71 %18 %18
         %93 = OpLoad %17 %92
         %94 = OpAccessChain %41 %11 %93
         %95 = OpLoad %6 %94
         %96 = OpAccessChain %20 %16 %18 %38
         %97 = OpLoad %6 %96
         %98 = OpFOrdEqual %35 %95 %97
               OpBranch %91
         %91 = OpLabel
         %99 = OpPhi %35 %89 %81 %98 %90
               OpSelectionMerge %101 None
               OpBranchConditional %99 %100 %118
        %100 = OpLabel
        %105 = OpAccessChain %72 %71 %18 %19
        %106 = OpLoad %17 %105
        %107 = OpConvertSToF %6 %106
        %108 = OpAccessChain %72 %71 %18 %38
        %109 = OpLoad %17 %108
        %110 = OpConvertSToF %6 %109
        %111 = OpAccessChain %72 %71 %18 %38
        %112 = OpLoad %17 %111
        %113 = OpConvertSToF %6 %112
        %114 = OpAccessChain %72 %71 %18 %19
        %115 = OpLoad %17 %114
        %116 = OpConvertSToF %6 %115
        %117 = OpCompositeConstruct %102 %107 %110 %113 %116
               OpStore %104 %117
               OpBranch %101
        %118 = OpLabel
        %119 = OpAccessChain %72 %71 %18 %38
        %120 = OpLoad %17 %119
        %121 = OpConvertSToF %6 %120
        %122 = OpCompositeConstruct %102 %121 %121 %121 %121
               OpStore %104 %122
               OpBranch %101
        %101 = OpLabel
               OpReturn
               OpFunctionEnd
