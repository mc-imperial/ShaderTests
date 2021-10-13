; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 108
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %89
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "idx"
               OpName %14 "arr"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %30 "i"
               OpName %89 "_GLF_color"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 -87256
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 3
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Function %12
         %15 = OpTypeArray %6 %11
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpConstant %6 2
         %21 = OpTypePointer Uniform %6
         %24 = OpConstant %6 1
         %37 = OpConstant %6 10
         %38 = OpTypeBool
         %86 = OpTypeFloat 32
         %87 = OpTypeVector %86 4
         %88 = OpTypePointer Output %87
         %89 = OpVariable %88 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %14 = OpVariable %13 Function
         %30 = OpVariable %7 Function
               OpStore %8 %9
         %22 = OpAccessChain %21 %18 %19 %20
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %21 %18 %19 %24
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %21 %18 %19 %19
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %12 %23 %26 %28
               OpStore %14 %29
               OpStore %30 %19
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %6 %30
         %39 = OpSLessThan %38 %36 %37
               OpBranchConditional %39 %32 %33
         %32 = OpLabel
         %40 = OpAccessChain %21 %18 %19 %24
         %41 = OpLoad %6 %40
         %42 = OpAccessChain %7 %14 %41
         %43 = OpLoad %6 %42
         %44 = OpAccessChain %21 %18 %19 %24
         %45 = OpLoad %6 %44
         %46 = OpSLessThanEqual %38 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %48
         %47 = OpLabel
         %49 = OpLoad %6 %8
         %50 = OpIAdd %6 %49 %24
               OpStore %8 %50
         %51 = OpExtInst %6 %1 SMax %49 %19
         %52 = OpAccessChain %21 %18 %19 %24
         %53 = OpLoad %6 %52
         %54 = OpAccessChain %7 %14 %51
               OpStore %54 %53
               OpBranch %48
         %48 = OpLabel
               OpBranch %34
         %34 = OpLabel
         %55 = OpLoad %6 %30
         %56 = OpIAdd %6 %55 %24
               OpStore %30 %56
               OpBranch %31
         %33 = OpLabel
         %57 = OpAccessChain %21 %18 %19 %20
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %7 %14 %58
         %60 = OpLoad %6 %59
         %61 = OpAccessChain %21 %18 %19 %24
         %62 = OpLoad %6 %61
         %63 = OpIEqual %38 %60 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %65
         %64 = OpLabel
         %66 = OpAccessChain %21 %18 %19 %24
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %7 %14 %67
         %69 = OpLoad %6 %68
         %70 = OpAccessChain %21 %18 %19 %24
         %71 = OpLoad %6 %70
         %72 = OpIEqual %38 %69 %71
               OpBranch %65
         %65 = OpLabel
         %73 = OpPhi %38 %63 %33 %72 %64
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %75
         %74 = OpLabel
         %76 = OpAccessChain %21 %18 %19 %19
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %7 %14 %77
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %21 %18 %19 %19
         %81 = OpLoad %6 %80
         %82 = OpIEqual %38 %79 %81
               OpBranch %75
         %75 = OpLabel
         %83 = OpPhi %38 %73 %65 %82 %74
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %103
         %84 = OpLabel
         %90 = OpAccessChain %21 %18 %19 %24
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %86 %91
         %93 = OpAccessChain %21 %18 %19 %20
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %86 %94
         %96 = OpAccessChain %21 %18 %19 %20
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %86 %97
         %99 = OpAccessChain %21 %18 %19 %24
        %100 = OpLoad %6 %99
        %101 = OpConvertSToF %86 %100
        %102 = OpCompositeConstruct %87 %92 %95 %98 %101
               OpStore %89 %102
               OpBranch %85
        %103 = OpLabel
        %104 = OpAccessChain %21 %18 %19 %20
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %86 %105
        %107 = OpCompositeConstruct %87 %106 %106 %106 %106
               OpStore %89 %107
               OpBranch %85
         %85 = OpLabel
               OpReturn
               OpFunctionEnd
