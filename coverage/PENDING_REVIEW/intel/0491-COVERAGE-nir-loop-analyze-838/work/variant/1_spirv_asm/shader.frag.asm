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
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %30 "index"
               OpName %89 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %89 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 6
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 3
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 5
         %25 = OpConstant %6 2
         %29 = OpTypePointer Function %6
         %31 = OpConstant %6 1
         %37 = OpTypeBool
         %38 = OpConstantTrue %37
         %69 = OpConstant %6 4
         %86 = OpTypeFloat 32
         %87 = OpTypeVector %86 4
         %88 = OpTypePointer Output %87
         %89 = OpVariable %88 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %30 = OpVariable %29 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %17 %25
         %27 = OpLoad %6 %26
         %28 = OpCompositeConstruct %9 %21 %24 %27
               OpStore %11 %28
               OpStore %30 %31
               OpBranch %32
         %32 = OpLabel
               OpLoopMerge %34 %35 None
               OpBranch %36
         %36 = OpLabel
               OpSelectionMerge %40 None
               OpBranchConditional %38 %39 %40
         %39 = OpLabel
         %41 = OpAccessChain %19 %16 %17 %17
         %42 = OpLoad %6 %41
         %43 = OpIEqual %37 %42 %31
         %44 = OpLoad %6 %30
         %45 = OpSLessThanEqual %37 %44 %31
         %46 = OpLogicalAnd %37 %43 %45
         %47 = OpLogicalNot %37 %46
               OpBranch %40
         %40 = OpLabel
         %48 = OpPhi %37 %38 %36 %47 %39
         %49 = OpLogicalNot %37 %48
               OpBranchConditional %49 %33 %34
         %33 = OpLabel
         %50 = OpLoad %6 %30
         %51 = OpAccessChain %29 %11 %50
         %52 = OpLoad %6 %51
         %53 = OpIAdd %6 %52 %31
               OpStore %51 %53
         %54 = OpLoad %6 %30
         %55 = OpIAdd %6 %54 %31
               OpStore %30 %55
               OpBranch %35
         %35 = OpLabel
               OpBranch %32
         %34 = OpLabel
         %56 = OpAccessChain %19 %16 %17 %31
         %57 = OpLoad %6 %56
         %58 = OpAccessChain %29 %11 %57
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %19 %16 %17 %18
         %61 = OpLoad %6 %60
         %62 = OpIEqual %37 %59 %61
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %64
         %63 = OpLabel
         %65 = OpAccessChain %19 %16 %17 %17
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %29 %11 %66
         %68 = OpLoad %6 %67
         %70 = OpAccessChain %19 %16 %17 %69
         %71 = OpLoad %6 %70
         %72 = OpIEqual %37 %68 %71
               OpBranch %64
         %64 = OpLabel
         %73 = OpPhi %37 %62 %34 %72 %63
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %75
         %74 = OpLabel
         %76 = OpAccessChain %19 %16 %17 %18
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %29 %11 %77
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %19 %16 %17 %25
         %81 = OpLoad %6 %80
         %82 = OpIEqual %37 %79 %81
               OpBranch %75
         %75 = OpLabel
         %83 = OpPhi %37 %73 %64 %82 %74
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %103
         %84 = OpLabel
         %90 = OpAccessChain %19 %16 %17 %17
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %86 %91
         %93 = OpAccessChain %19 %16 %17 %31
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %86 %94
         %96 = OpAccessChain %19 %16 %17 %31
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %86 %97
         %99 = OpAccessChain %19 %16 %17 %17
        %100 = OpLoad %6 %99
        %101 = OpConvertSToF %86 %100
        %102 = OpCompositeConstruct %87 %92 %95 %98 %101
               OpStore %89 %102
               OpBranch %85
        %103 = OpLabel
        %104 = OpAccessChain %19 %16 %17 %31
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %86 %105
        %107 = OpCompositeConstruct %87 %106 %106 %106 %106
               OpStore %89 %107
               OpBranch %85
         %85 = OpLabel
               OpReturn
               OpFunctionEnd
