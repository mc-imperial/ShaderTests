; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %47
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v0"
               OpName %13 "buf1"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %24 "v1"
               OpName %47 "_GLF_color"
               OpName %49 "buf0"
               OpMemberName %49 0 "_GLF_uniform_int_values"
               OpName %51 ""
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 1
               OpDecorate %47 Location 0
               OpDecorate %48 ArrayStride 16
               OpMemberDecorate %49 0 Offset 0
               OpDecorate %49 Block
               OpDecorate %51 DescriptorSet 0
               OpDecorate %51 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 2
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 1
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 -580.015015
         %31 = OpConstant %6 100
         %32 = OpConstantComposite %7 %31 %31
         %34 = OpConstant %10 1
         %35 = OpTypePointer Function %6
         %41 = OpTypeBool
         %45 = OpTypeVector %6 4
         %46 = OpTypePointer Output %45
         %47 = OpVariable %46 Output
         %48 = OpTypeArray %16 %11
         %49 = OpTypeStruct %48
         %50 = OpTypePointer Uniform %49
         %51 = OpVariable %50 Uniform
         %52 = OpTypePointer Uniform %16
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %24 = OpVariable %8 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpCompositeConstruct %7 %21 %22
               OpStore %9 %23
         %25 = OpLoad %7 %9
         %26 = OpExtInst %7 %1 Ceil %25
         %27 = OpAccessChain %19 %15 %17 %17
         %28 = OpLoad %6 %27
         %29 = OpFNegate %6 %28
         %30 = OpCompositeConstruct %7 %29 %29
         %33 = OpExtInst %7 %1 FClamp %26 %30 %32
               OpStore %24 %33
         %36 = OpAccessChain %35 %24 %34
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %19 %15 %17 %17
         %39 = OpLoad %6 %38
         %40 = OpFNegate %6 %39
         %42 = OpFOrdEqual %41 %37 %40
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %66
         %43 = OpLabel
         %53 = OpAccessChain %52 %51 %17 %17
         %54 = OpLoad %16 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpAccessChain %52 %51 %17 %18
         %57 = OpLoad %16 %56
         %58 = OpConvertSToF %6 %57
         %59 = OpAccessChain %52 %51 %17 %18
         %60 = OpLoad %16 %59
         %61 = OpConvertSToF %6 %60
         %62 = OpAccessChain %52 %51 %17 %17
         %63 = OpLoad %16 %62
         %64 = OpConvertSToF %6 %63
         %65 = OpCompositeConstruct %45 %55 %58 %61 %64
               OpStore %47 %65
               OpBranch %44
         %66 = OpLabel
         %67 = OpAccessChain %52 %51 %17 %18
         %68 = OpLoad %16 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpCompositeConstruct %45 %69 %69 %69 %69
               OpStore %47 %70
               OpBranch %44
         %44 = OpLabel
               OpReturn
               OpFunctionEnd
