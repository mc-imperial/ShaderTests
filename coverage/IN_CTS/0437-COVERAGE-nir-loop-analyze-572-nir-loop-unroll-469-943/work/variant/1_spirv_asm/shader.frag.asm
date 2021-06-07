; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %30 "i"
               OpName %38 "buf1"
               OpMemberName %38 0 "_GLF_uniform_int_values"
               OpName %40 ""
               OpName %70 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %37 ArrayStride 16
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 1
               OpDecorate %70 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 4
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %17 1
         %25 = OpConstant %17 2
         %29 = OpTypePointer Function %17
         %37 = OpTypeArray %17 %8
         %38 = OpTypeStruct %37
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %41 = OpTypePointer Uniform %17
         %44 = OpConstant %17 3
         %46 = OpTypeBool
         %52 = OpTypePointer Function %6
         %68 = OpTypeVector %6 4
         %69 = OpTypePointer Output %68
         %70 = OpVariable %69 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %30 = OpVariable %29 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %18 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %18 %25
         %27 = OpLoad %6 %26
         %28 = OpCompositeConstruct %9 %21 %24 %27
               OpStore %11 %28
               OpStore %30 %22
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %17 %30
         %42 = OpAccessChain %41 %40 %18 %25
         %43 = OpLoad %17 %42
         %45 = OpExtInst %17 %1 SMin %43 %44
         %47 = OpSLessThan %46 %36 %45
               OpBranchConditional %47 %32 %33
         %32 = OpLabel
         %48 = OpAccessChain %41 %40 %18 %25
         %49 = OpLoad %17 %48
         %50 = OpAccessChain %19 %16 %18 %18
         %51 = OpLoad %6 %50
         %53 = OpAccessChain %52 %11 %49
         %54 = OpLoad %6 %53
         %55 = OpFAdd %6 %54 %51
         %56 = OpAccessChain %52 %11 %49
               OpStore %56 %55
               OpBranch %34
         %34 = OpLabel
         %57 = OpLoad %17 %30
         %58 = OpIAdd %17 %57 %22
               OpStore %30 %58
               OpBranch %31
         %33 = OpLabel
         %59 = OpAccessChain %41 %40 %18 %25
         %60 = OpLoad %17 %59
         %61 = OpAccessChain %52 %11 %60
         %62 = OpLoad %6 %61
         %63 = OpAccessChain %19 %16 %18 %44
         %64 = OpLoad %6 %63
         %65 = OpFOrdEqual %46 %62 %64
               OpSelectionMerge %67 None
               OpBranchConditional %65 %66 %84
         %66 = OpLabel
         %71 = OpAccessChain %41 %40 %18 %22
         %72 = OpLoad %17 %71
         %73 = OpConvertSToF %6 %72
         %74 = OpAccessChain %41 %40 %18 %18
         %75 = OpLoad %17 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpAccessChain %41 %40 %18 %18
         %78 = OpLoad %17 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %41 %40 %18 %22
         %81 = OpLoad %17 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpCompositeConstruct %68 %73 %76 %79 %82
               OpStore %70 %83
               OpBranch %67
         %84 = OpLabel
         %85 = OpAccessChain %41 %40 %18 %18
         %86 = OpLoad %17 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %68 %87 %87 %87 %87
               OpStore %70 %88
               OpBranch %67
         %67 = OpLabel
               OpReturn
               OpFunctionEnd
